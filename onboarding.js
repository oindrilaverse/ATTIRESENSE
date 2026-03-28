/**
 * AttireSense – Onboarding Flow Logic
 */

let currentStep = 1;
const TOTAL_STEPS = 9;
let profile = getProfile(); // Load any existing
let heightUnit = 'cm';

// ── Step validation helpers ──────────────────────────────────
const stepValidators = {
  1: () => !!profile.gender,
  2: () => !!profile.skinTone,
  3: () => {
    const v = document.getElementById('heightInput').value;
    return v && Number(v) > 0;
  },
  4: () => !!profile.bodyShape,
  5: () => !!profile.ageRange,
  6: () => !!profile.climate,
  7: () => !!profile.environment,
  8: () => !!profile.occasion,
  9: () => !!profile.stylePreference,
};

// ── Render step UI ───────────────────────────────────────────
function showStep(n) {
  document.querySelectorAll('.ob-step').forEach(s => s.classList.remove('active'));
  const el = document.getElementById(`step-${n}`);
  if (el) el.classList.add('active');

  document.getElementById('stepCountText').textContent = `Step ${n} of ${TOTAL_STEPS}`;
  const pct = (n / TOTAL_STEPS) * 100;
  document.getElementById('progressFill').style.width = pct + '%';

  document.getElementById('backBtn').style.display = n > 1 ? 'inline-block' : 'none';

  const nextBtn = document.getElementById('nextBtn');
  nextBtn.textContent = n === TOTAL_STEPS ? 'Finish & Start Chatting ✨' : 'Continue →';

  validateStep();
}

// ── Validate current step and toggle Next button ─────────────
function validateStep() {
  const valid = stepValidators[currentStep] ? stepValidators[currentStep]() : true;
  document.getElementById('nextBtn').disabled = !valid;
}

// ── Option button selection ──────────────────────────────────
document.addEventListener('click', (e) => {
  const btn = e.target.closest('.option-btn');
  if (!btn) return;
  const field = btn.dataset.field;
  const val   = btn.dataset.val;
  if (!field || !val) return;

  // Deselect siblings
  const siblings = btn.closest('.options-list, .options-grid')
    .querySelectorAll('.option-btn');
  siblings.forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');

  profile[field] = val;
  saveProfile({ [field]: val });
  validateStep();
});

// ── Skin Tone swatches ───────────────────────────────────────
document.querySelectorAll('.skin-swatch').forEach(sw => {
  sw.addEventListener('click', () => {
    document.querySelectorAll('.skin-swatch').forEach(s => s.classList.remove('selected'));
    sw.classList.add('selected');
    profile.skinTone = sw.dataset.val;
    saveProfile({ skinTone: sw.dataset.val });
    document.getElementById('skinToneSelected').textContent = `Selected: ${sw.dataset.val}`;
    validateStep();
  });
});

// Restore swatch selection if profile already has skinTone
if (profile.skinTone) {
  const sw = document.querySelector(`.skin-swatch[data-val="${profile.skinTone}"]`);
  if (sw) {
    sw.classList.add('selected');
    document.getElementById('skinToneSelected').textContent = `Selected: ${profile.skinTone}`;
  }
}

// ── Height unit toggle ───────────────────────────────────────
function setUnit(unit) {
  heightUnit = unit;
  document.getElementById('unitCm').classList.toggle('active', unit === 'cm');
  document.getElementById('unitFt').classList.toggle('active', unit === 'ft');
  document.getElementById('heightInput').placeholder = unit === 'cm' ? 'e.g. 175' : 'e.g. 5.9';
}

document.getElementById('heightInput').addEventListener('input', () => {
  const val = document.getElementById('heightInput').value;
  if (val) {
    profile.height = `${val} ${heightUnit}`;
    saveProfile({ height: `${val} ${heightUnit}` });
  }
  validateStep();
});

// ── Navigation ────────────────────────────────────────────────
function nextStep() {
  if (currentStep === TOTAL_STEPS) {
    // Done — go to chat
    window.location.href = 'chat.html';
    return;
  }
  currentStep++;
  showStep(currentStep);
}

function prevStep() {
  if (currentStep > 1) {
    currentStep--;
    showStep(currentStep);
  }
}

// ── Restore previously selected option buttons ────────────────
function restoreSelections() {
  const fieldMap = {
    1: 'gender', 4: 'bodyShape', 5: 'ageRange',
    6: 'climate', 7: 'environment', 8: 'occasion', 9: 'stylePreference'
  };
  for (const [step, field] of Object.entries(fieldMap)) {
    const saved = profile[field];
    if (!saved) continue;
    const btn = document.querySelector(`.ob-step#step-${step} .option-btn[data-val="${saved}"]`);
    if (btn) btn.classList.add('selected');
  }
  if (profile.height) {
    const parts = profile.height.split(' ');
    document.getElementById('heightInput').value = parts[0] || '';
    if (parts[1]) setUnit(parts[1]);
  }
}

// ── Init ──────────────────────────────────────────────────────
restoreSelections();
showStep(currentStep);
