/**
 * AttireSense – Shared App Utilities
 * Handles localStorage profile management and helpers
 */

const PROFILE_KEY = 'attireSenseProfile';
const API_KEY_KEY = '';

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
 * Build a system prompt from user profile for Gemini
 */
function buildSystemPrompt(profile) {
    const lines = [
        'You are AttireSense, a friendly AI fashion assistant. Your tagline is "Look Better, Effortlessly".',
        'Your personality: friendly, helpful, positive, encouraging. Use light emojis when appropriate 😊.',
        'Keep responses clear, short, and easy to read. Use bullet points and short sections.',
        '',
        'IMPORTANT RULES:',
        '- Never generate NSFW content or suggest inappropriate clothing.',
        '- Always be respectful and inclusive.',
        '- Explain WHY an outfit works for this specific user.',
        '',
        'USER PROFILE:',
    ];
    if (profile.gender) lines.push(`- Gender: ${profile.gender}`);
    if (profile.skinTone) lines.push(`- Skin Tone: ${profile.skinTone}`);
    if (profile.height) lines.push(`- Height: ${profile.height}`);
    if (profile.bodyShape) lines.push(`- Body Shape: ${profile.bodyShape}`);
    if (profile.ageRange) lines.push(`- Age Range: ${profile.ageRange}`);
    if (profile.climate) lines.push(`- Climate: ${profile.climate}`);
    if (profile.environment) lines.push(`- Environment: ${profile.environment}`);
    if (profile.occasion) lines.push(`- Primary Occasion: ${profile.occasion}`);
    if (profile.stylePreference) lines.push(`- Style Preference: ${profile.stylePreference}`);
    lines.push('');
    lines.push('OUTFIT RESPONSE FORMAT (use this structure when recommending outfits):');
    lines.push('Always include: Top, Bottom, Shoes, Accessories.');
    lines.push('Optionally include: Jacket/Layer, Seasonal adjustment.');
    lines.push('End with a short "Why this works" section (2-3 bullet points).');
    lines.push('Format the outfit sections clearly with labels like "👕 Top:", "👖 Bottom:", "👟 Shoes:", "⌚ Accessories:", "💡 Why this works:"');
    return lines.join('\n');
}

/**
 * Parse AI response text into structured outfit HTML
 * Detects outfit sections and renders them as a styled card
 */
function renderAIMessage(text) {
    // Check if this is an outfit recommendation
    const hasOutfit = /👕|top:|bottom:|shoes:|accessories:/i.test(text);

    if (!hasOutfit) {
        // Plain message — render markdown-lite
        return `<div class="bubble ai">${markdownLite(text)}</div>`;
    }

    // Structured outfit card
    const sections = [
        { key: /👕\s*top\s*:/i, icon: '👕', label: 'Top' },
        { key: /👖\s*bottom\s*:/i, icon: '👖', label: 'Bottom' },
        { key: /👟\s*shoes?\s*:/i, icon: '👟', label: 'Shoes' },
        { key: /⌚\s*accessories\s*:/i, icon: '⌚', label: 'Accessories' },
        { key: /🧥\s*jacket\s*:/i, icon: '🧥', label: 'Jacket' },
    ];

    const lines = text.split('\n');
    let sectionMap = {};
    let whyLines = [];
    let currentKey = null;
    let capturing = false;

    for (const line of lines) {
        const trimmed = line.trim();
        // Detect "Why this works" block
        if (/💡.*why this works|why this works/i.test(trimmed)) {
            currentKey = '__why__';
            capturing = true;
            continue;
        }
        // Detect outfit sections
        let matched = false;
        for (const s of sections) {
            if (s.key.test(trimmed)) {
                currentKey = s.label;
                const colonIdx = trimmed.indexOf(':');
                const rest = colonIdx !== -1 ? trimmed.slice(colonIdx + 1).trim() : '';
                sectionMap[currentKey] = rest || '';
                capturing = true;
                matched = true;
                break;
            }
        }
        if (matched) continue;
        // Accumulate content
        if (capturing && currentKey && trimmed) {
            if (currentKey === '__why__') {
                whyLines.push(trimmed.replace(/^[-•*]\s*/, ''));
            } else {
                sectionMap[currentKey] = (sectionMap[currentKey] ? sectionMap[currentKey] + ' ' : '') + trimmed;
            }
        }
    }

    // Build outfit card HTML
    let cardHTML = `<div class="outfit-card">
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:16px;">
      <span class="badge badge-purple">✦ Outfit Recommendation</span>
    </div>`;

    const sectionDefs = [
        { label: 'Top', icon: '👕' },
        { label: 'Bottom', icon: '👖' },
        { label: 'Shoes', icon: '👟' },
        { label: 'Accessories', icon: '⌚' },
        { label: 'Jacket', icon: '🧥' },
    ];
    for (const sd of sectionDefs) {
        if (sectionMap[sd.label]) {
            cardHTML += `
      <div class="outfit-section">
        <div class="outfit-icon">${sd.icon}</div>
        <div>
          <div class="outfit-label">${sd.label}</div>
          <div class="outfit-value">${sectionMap[sd.label]}</div>
        </div>
      </div>`;
        }
    }

    if (whyLines.length > 0) {
        cardHTML += `<div class="why-box">
      <div class="outfit-label" style="margin-bottom:8px;">💡 Why this works</div>
      <p>${whyLines.map(l => `• ${l}`).join('<br>')}</p>
    </div>`;
    }

    cardHTML += '</div>';
    return cardHTML;
}

/** Minimal markdown-to-HTML converter */
function markdownLite(text) {
    return text
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/`(.*?)`/g, '<code>$1</code>')
        .replace(/^[-•*]\s+(.+)$/gm, '<li>$1</li>')
        .replace(/((<li>.*<\/li>\n?)+)/g, '<ul>$1</ul>')
        .replace(/\n\n/g, '</p><p>')
        .replace(/\n/g, '<br>');
}
