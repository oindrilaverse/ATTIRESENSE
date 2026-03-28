/**
 * AttireSense – Shared App Utilities
 * Handles localStorage profile management and helpers
 */

const PROFILE_KEY = 'attireSenseProfile';
const API_KEY_KEY = 'attireSenseApiKey';

/** Get user profile from localStorage */
function getProfile() {
  try {
    const raw = localStorage.getItem(PROFILE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

/** Save (merge) profile fields */
function saveProfile(updates) {
  const existing = getProfile();
  const merged = { ...existing, ...updates };
  localStorage.setItem(PROFILE_KEY, JSON.stringify(merged));
  return merged;
}

/** Clear profile */
function clearProfile() {
  localStorage.removeItem(PROFILE_KEY);
}

/** Get stored Gemini API key */
function getApiKey() {
  return localStorage.getItem(API_KEY_KEY) || '';
}

/** Save Gemini API key */
function saveApiKey(key) {
  localStorage.setItem(API_KEY_KEY, key.trim());
}

/**
 * Build a system prompt from user profile for Gemini.
 * Includes explicit example so Gemini follows the card format.
 */
function buildSystemPrompt(profile) {
  const lines = [
    'You are AttireSense, a friendly AI fashion assistant. Your tagline is "Look Better, Effortlessly".',
    'Your personality: friendly, helpful, positive, encouraging. Use light emojis when appropriate 😊.',
    '',
    'CRITICAL: When recommending an outfit, you MUST use EXACTLY these emoji labels on separate lines:',
    '👕 Top: [clothing item]',
    '👖 Bottom: [clothing item]',
    '👟 Shoes: [footwear]',
    '⌚ Accessories: [accessories]',
    '💡 Why this works:',
    '• [reason tailored to user profile]',
    '• [reason]',
    '',
    'Do NOT use markdown bold (**) for section names. Use the exact emoji labels above.',
    'For non-outfit questions, respond conversationally without the outfit card format.',
    '',
    'OTHER RULES:',
    '- Never generate NSFW content.',
    '- Always be respectful and inclusive.',
    '- Explain WHY the outfit works for THIS specific user.',
    '- Keep responses concise and easy to read.',
    '',
    'USER PROFILE:',
  ];
  if (profile.gender)          lines.push(`- Gender: ${profile.gender}`);
  if (profile.skinTone)        lines.push(`- Skin Tone: ${profile.skinTone}`);
  if (profile.height)          lines.push(`- Height: ${profile.height}`);
  if (profile.bodyShape)       lines.push(`- Body Shape: ${profile.bodyShape}`);
  if (profile.ageRange)        lines.push(`- Age Range: ${profile.ageRange}`);
  if (profile.climate)         lines.push(`- Climate: ${profile.climate}`);
  if (profile.environment)     lines.push(`- Environment: ${profile.environment}`);
  if (profile.occasion)        lines.push(`- Primary Occasion: ${profile.occasion}`);
  if (profile.stylePreference) lines.push(`- Style Preference: ${profile.stylePreference}`);

  if (Object.keys(profile).length === 0) {
    lines.push('(No profile set yet — ask the user for their preferences before recommending.)');
  }

  return lines.join('\n');
}

/**
 * Parse AI response text into structured outfit HTML.
 * Requires at least 2 emoji section markers to trigger card mode.
 * Falls back to a plain styled bubble for non-outfit responses.
 */
function renderAIMessage(text) {
  // Need at least 2 of these markers to consider it an outfit response
  const outfitMarkers = [
    /👕\s*top\s*:/i,
    /👖\s*bottom\s*:/i,
    /👟\s*shoes?\s*:/i,
    /⌚\s*accessories\s*:/i,
  ];
  const markerCount = outfitMarkers.filter(rx => rx.test(text)).length;

  if (markerCount < 2) {
    return `<div class="bubble ai">${markdownLite(text)}</div>`;
  }

  // Parse outfit sections line by line
  const sectionPatterns = [
    { rx: /^👕\s*top\s*:/i,         label: 'Top',         icon: '👕' },
    { rx: /^👖\s*bottom\s*:/i,      label: 'Bottom',      icon: '👖' },
    { rx: /^👟\s*shoes?\s*:/i,      label: 'Shoes',       icon: '👟' },
    { rx: /^⌚\s*accessories\s*:/i,  label: 'Accessories', icon: '⌚' },
    { rx: /^🧥\s*jacket\s*:/i,      label: 'Jacket',      icon: '🧥' },
  ];
  const whyPattern = /^💡\s*why this works\s*:?/i;

  const sectionMap = {};
  const whyLines  = [];
  let currentKey  = null;

  for (const rawLine of text.split('\n')) {
    const line = rawLine.trim();
    if (!line) continue;

    if (whyPattern.test(line)) {
      currentKey = '__why__';
      const rest = line.replace(whyPattern, '').replace(/^:?\s*/, '').trim();
      if (rest) whyLines.push(rest.replace(/^[-•*]\s*/, ''));
      continue;
    }

    let matched = false;
    for (const sp of sectionPatterns) {
      if (sp.rx.test(line)) {
        currentKey = sp.label;
        const colonIdx = line.indexOf(':');
        sectionMap[currentKey] = colonIdx !== -1 ? line.slice(colonIdx + 1).trim() : '';
        matched = true;
        break;
      }
    }
    if (matched) continue;

    // Continuation content
    if (currentKey === '__why__') {
      whyLines.push(line.replace(/^[-•*]\s*/, ''));
    } else if (currentKey && sectionMap[currentKey] !== undefined) {
      sectionMap[currentKey] = (sectionMap[currentKey] ? sectionMap[currentKey] + ' ' : '') + line;
    }
  }

  // If nothing parsed, fall back
  const hasContent = sectionPatterns.some(s => sectionMap[s.label]);
  if (!hasContent) {
    return `<div class="bubble ai">${markdownLite(text)}</div>`;
  }

  // Build card
  let cardHTML = `<div class="outfit-card">
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:16px;">
      <span class="badge badge-purple">✦ Outfit Recommendation</span>
    </div>`;

  const ordered = [
    { label: 'Top',         icon: '👕' },
    { label: 'Bottom',      icon: '👖' },
    { label: 'Shoes',       icon: '👟' },
    { label: 'Accessories', icon: '⌚' },
    { label: 'Jacket',      icon: '🧥' },
  ];

  for (const sd of ordered) {
    if (!sectionMap[sd.label]) continue;
    cardHTML += `
    <div class="outfit-section">
      <div class="outfit-icon">${sd.icon}</div>
      <div>
        <div class="outfit-label">${sd.label}</div>
        <div class="outfit-value">${escSafe(sectionMap[sd.label])}</div>
      </div>
    </div>`;
  }

  if (whyLines.length > 0) {
    cardHTML += `<div class="why-box">
      <div class="outfit-label" style="margin-bottom:8px;">💡 Why this works</div>
      <p>${whyLines.map(l => `• ${escSafe(l)}`).join('<br>')}</p>
    </div>`;
  }

  cardHTML += '</div>';
  return cardHTML;
}

/** Safe HTML escape — prevents XSS in card content */
function escSafe(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/** Minimal markdown-to-HTML converter with correct list wrapping */
function markdownLite(text) {
  if (!text) return '';
  let safe = escSafe(text);

  // Bold, italic, inline code
  safe = safe
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/`(.*?)`/g, '<code style="background:rgba(255,255,255,0.08);padding:1px 6px;border-radius:4px;font-size:0.85em;">$1</code>');

  // Bullet list handling — collect consecutive bullet lines into <ul>
  const bulletRx = /^[-•*]\s+(.+)$/;
  const resultLines = [];
  let inList = false;

  for (const rawLine of safe.split('\n')) {
    const m = bulletRx.exec(rawLine.trim());
    if (m) {
      if (!inList) {
        resultLines.push('<ul style="padding-left:18px;margin:8px 0;list-style:disc;">');
        inList = true;
      }
      resultLines.push(`<li style="margin:4px 0;">${m[1]}</li>`);
    } else {
      if (inList) {
        resultLines.push('</ul>');
        inList = false;
      }
      resultLines.push(rawLine);
    }
  }
  if (inList) resultLines.push('</ul>');

  return resultLines.join('\n')
    .replace(/\n\n+/g, '</p><p style="margin:8px 0;">')
    .replace(/\n/g, '<br>');
}
