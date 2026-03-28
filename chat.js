/**
 * AttireSense – Chat Logic & Gemini API Integration
 * Uses Gemini 2.0 Flash via the REST API
 */

// ── State ────────────────────────────────────────────────────
let chatHistory = [];   // [{role:'user'|'model', parts:[{text:''}]}]
let isTyping    = false;

const GEMINI_MODEL = 'gemini-2.0-flash';
const GEMINI_URL   = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`;

const SUGGESTIONS = [
  "What should I wear today?",
  "Suggest a casual weekend outfit 😊",
  "Give me a formal office look",
  "What colors suit my skin tone best?",
  "What to wear on a first date?",
  "Suggest something for hot weather",
];

// ── DOM refs ─────────────────────────────────────────────────
const messagesArea   = document.getElementById('messagesArea');
const suggestionsRow = document.getElementById('suggestionsRow');
const chatInput      = document.getElementById('chatInput');
const sendBtn        = document.getElementById('sendBtn');

// ── Init ─────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderSidebar();
  renderEmptyState();
  setupInputListeners();

  // Check for API key; prompt if missing
  if (!getApiKey()) {
    setTimeout(() => openApiModal(), 600);
  }
});

// ── Sidebar Profile Render ────────────────────────────────────
function renderSidebar() {
  const p = getProfile();

  // Avatar initials
  const initials = p.gender ? p.gender[0].toUpperCase() : '?';
  document.getElementById('sidebarAvatar').textContent = initials;

  // Name label
  const name = [p.stylePreference, p.gender].filter(Boolean).join(' · ') || 'Your Profile';
  document.getElementById('sidebarName').textContent = name;

  // Profile pills
  const fields = [
    { icon: '🎨', key: 'skinTone',        label: 'Skin Tone' },
    { icon: '📏', key: 'height',           label: 'Height' },
    { icon: '🧍', key: 'bodyShape',        label: 'Body Shape' },
    { icon: '🎂', key: 'ageRange',         label: 'Age' },
    { icon: '🌍', key: 'climate',          label: 'Climate' },
    { icon: '🏢', key: 'environment',      label: 'Environment' },
    { icon: '📅', key: 'occasion',         label: 'Occasion' },
    { icon: '✨', key: 'stylePreference',  label: 'Style' },
  ];

  const container = document.getElementById('profilePills');
  container.innerHTML = '';

  let hasAny = false;
  for (const f of fields) {
    if (!p[f.key]) continue;
    hasAny = true;
    container.innerHTML += `
      <div class="profile-pill">
        <span class="profile-pill-icon">${f.icon}</span>
        <div>
          <div class="profile-pill-key">${f.label}</div>
          <div class="profile-pill-val">${p[f.key]}</div>
        </div>
      </div>`;
  }

  if (!hasAny) {
    container.innerHTML = `<div class="text-muted" style="font-size:0.82rem;padding:8px 4px;">
      No profile yet. <a href="onboarding.html" style="color:var(--text-accent);">Set it up →</a>
    </div>`;
  }
}

// ── Empty State ───────────────────────────────────────────────
function renderEmptyState() {
  const p = getProfile();
  // Show style preference as a friendly greeting, fall back to 'there'
  const greeting = p.gender ? p.gender : 'there';

  messagesArea.innerHTML = `
    <div class="empty-state">
      <div class="empty-icon">✨</div>
      <h2>Hi ${greeting}! 👋</h2>
      <p>I'm your personal AI stylist. Tell me what you need, or pick a starter below to get the perfect outfit recommendation instantly.</p>
      <div class="starter-grid">
        <div class="starter-card" onclick="sendStarter(this.dataset.msg)" data-msg="What should I wear today based on my profile?">
          <span class="s-icon">👗</span>
          <strong>Today's Outfit</strong>
          Best look for today
        </div>
        <div class="starter-card" onclick="sendStarter(this.dataset.msg)" data-msg="What colors suit my skin tone and how should I use them?">
          <span class="s-icon">🎨</span>
          <strong>Color Match</strong>
          Colors for my skin tone
        </div>
        <div class="starter-card" onclick="sendStarter(this.dataset.msg)" data-msg="Suggest a work outfit for my environment and style.">
          <span class="s-icon">💼</span>
          <strong>Office Look</strong>
          Professional outfit ideas
        </div>
        <div class="starter-card" onclick="sendStarter(this.dataset.msg)" data-msg="Give me a casual weekend outfit that matches my style preference.">
          <span class="s-icon">😊</span>
          <strong>Weekend Casual</strong>
          Relaxed style ideas
        </div>
      </div>
    </div>`;
  suggestionsRow.style.display = 'none';
}

// ── Input listeners ───────────────────────────────────────────
function setupInputListeners() {
  // Auto-grow textarea
  chatInput.addEventListener('input', () => {
    chatInput.style.height = 'auto';
    chatInput.style.height = Math.min(chatInput.scrollHeight, 140) + 'px';
    sendBtn.disabled = !chatInput.value.trim();
  });

  // Enter = send, Shift+Enter = newline
  chatInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (!chatInput.value.trim() || isTyping) return;
      sendMessage();
    }
  });

  sendBtn.disabled = true;
}

// ── Send a starter prompt ─────────────────────────────────────
function sendStarter(msg) {
  chatInput.value = msg;
  chatInput.dispatchEvent(new Event('input'));
  sendMessage();
}

// ── Send Message ──────────────────────────────────────────────
async function sendMessage() {
  const text = chatInput.value.trim();
  if (!text || isTyping) return;

  const apiKey = getApiKey();
  if (!apiKey) {
    openApiModal();
    return;
  }

  // Clear empty state
  if (messagesArea.querySelector('.empty-state')) {
    messagesArea.innerHTML = '';
  }

  // Render user bubble
  appendUserBubble(text);

  // Reset input
  chatInput.value = '';
  chatInput.style.height = 'auto';
  sendBtn.disabled = true;

  // Add to history
  chatHistory.push({ role: 'user', parts: [{ text }] });

  // Show typing indicator
  const typingId = showTyping();
  isTyping = true;
  suggestionsRow.style.display = 'none';

  try {
    const profile = getProfile();
    const systemPrompt = buildSystemPrompt(profile);
    const responseText = await callGemini(apiKey, systemPrompt, chatHistory);

    removeTyping(typingId);
    appendAIBubble(responseText);

    // Add model response to history
    chatHistory.push({ role: 'model', parts: [{ text: responseText }] });

    // Show follow-up suggestions
    renderSuggestions();
  } catch (err) {
    removeTyping(typingId);
    appendErrorBubble(err.message || 'Something went wrong. Please check your API key and try again.');
  } finally {
    isTyping = false;
    sendBtn.disabled = false;
  }
}

// ── Gemini API Call ───────────────────────────────────────────
async function callGemini(apiKey, systemInstruction, history) {
  const body = {
    system_instruction: {
      parts: [{ text: systemInstruction }]
    },
    contents: history,
    generationConfig: {
      temperature: 0.85,
      maxOutputTokens: 1024,
    },
    safetySettings: [
      { category: 'HARM_CATEGORY_HARASSMENT',        threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
      { category: 'HARM_CATEGORY_HATE_SPEECH',       threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
      { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
      { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
    ]
  };

  const res = await fetch(`${GEMINI_URL}?key=${apiKey}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    const msg = err?.error?.message || `API error ${res.status}`;
    throw new Error(msg);
  }

  const data = await res.json();
  const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) throw new Error('No response received from Gemini.');
  return text;
}

// ── Render helpers ────────────────────────────────────────────
function appendUserBubble(text) {
  const wrap = document.createElement('div');
  wrap.className = 'bubble-wrap user';
  wrap.innerHTML = `
    <div class="avatar" style="width:32px;height:32px;font-size:0.7rem;">You</div>
    <div class="bubble user">${escapeHTML(text)}</div>`;
  messagesArea.appendChild(wrap);
  scrollToBottom();
}

function appendAIBubble(text) {
  const wrap = document.createElement('div');
  wrap.className = 'bubble-wrap';
  wrap.innerHTML = `
    <div class="logo-icon" style="width:32px;height:32px;font-size:0.9rem;flex-shrink:0;border-radius:10px;">✨</div>
    <div style="max-width:78%;display:flex;flex-direction:column;gap:12px;">
      ${renderAIMessage(text)}
    </div>`;
  messagesArea.appendChild(wrap);
  scrollToBottom();
}

function appendErrorBubble(msg) {
  const wrap = document.createElement('div');
  wrap.className = 'bubble-wrap';
  wrap.innerHTML = `
    <div class="logo-icon" style="width:32px;height:32px;font-size:0.9rem;flex-shrink:0;border-radius:10px;background:rgba(220,50,50,0.3);">⚠️</div>
    <div class="bubble ai" style="border-color:rgba(220,80,80,0.3);background:rgba(220,50,50,0.08);">
      <strong style="color:#ff8080;">Oops!</strong><br>
      <span style="font-size:0.88rem;">${escapeHTML(msg)}</span>
    </div>`;
  messagesArea.appendChild(wrap);
  scrollToBottom();
}

function showTyping() {
  const id = 'typing-' + Date.now();
  const wrap = document.createElement('div');
  wrap.className = 'bubble-wrap';
  wrap.id = id;
  wrap.innerHTML = `
    <div class="logo-icon" style="width:32px;height:32px;font-size:0.9rem;flex-shrink:0;border-radius:10px;">✨</div>
    <div class="typing-bubble">
      <span class="typing-dot"></span>
      <span class="typing-dot"></span>
      <span class="typing-dot"></span>
    </div>`;
  messagesArea.appendChild(wrap);
  scrollToBottom();
  return id;
}

function removeTyping(id) {
  const el = document.getElementById(id);
  if (el) el.remove();
}

function renderSuggestions() {
  // Pick 3 random suggestions
  const shuffled = [...SUGGESTIONS].sort(() => Math.random() - 0.5).slice(0, 3);
  suggestionsRow.style.display = 'flex';
  suggestionsRow.style.flexWrap = 'wrap';
  suggestionsRow.style.gap = '8px';
  // Use data-attributes instead of inline onclick to avoid apostrophe/quote crashes
  suggestionsRow.innerHTML = shuffled.map((s, i) =>
    `<button class="chip suggestion-chip" data-idx="${i}">${s}</button>`
  ).join('');
  // Store suggestions and attach listeners safely
  suggestionsRow._suggestions = shuffled;
  suggestionsRow.querySelectorAll('.suggestion-chip').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.dataset.idx, 10);
      sendStarter(suggestionsRow._suggestions[idx]);
    });
  });
}

function scrollToBottom() {
  requestAnimationFrame(() => {
    messagesArea.scrollTop = messagesArea.scrollHeight;
  });
}

function clearChat() {
  chatHistory = [];
  renderEmptyState();
}

function escapeHTML(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/\n/g, '<br>');
}

// ── API Key Modal ─────────────────────────────────────────────
function openApiModal() {
  const modal = document.getElementById('apiModal');
  const input = document.getElementById('apiKeyInput');
  input.value = getApiKey();
  modal.classList.add('open');
  setTimeout(() => input.focus(), 100);
}

function closeApiModal() {
  document.getElementById('apiModal').classList.remove('open');
}

function confirmApiKey() {
  const key = document.getElementById('apiKeyInput').value.trim();
  if (!key) return;
  saveApiKey(key);
  closeApiModal();

  // Update button to show it's set
  document.getElementById('apiKeyBtn').textContent = '🔑 Key Set ✓';
  document.getElementById('apiKeyBtn').style.color = 'var(--text-accent)';
}

// Close modal on overlay click
document.getElementById('apiModal').addEventListener('click', (e) => {
  if (e.target === document.getElementById('apiModal')) closeApiModal();
});

// Show key-set state if key already exists
if (getApiKey()) {
  const btn = document.getElementById('apiKeyBtn');
  if (btn) {
    btn.textContent = '🔑 Key Set ✓';
    btn.style.color = 'var(--text-accent)';
  }
}
