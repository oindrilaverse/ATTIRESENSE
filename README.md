# AttireSense ✨

> **Look Better, Effortlessly.**
> An AI-powered personal stylist application that provides tailored outfit recommendations based on your unique body type, style preferences, and occasion.

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)
![Tech Stack](https://img.shields.io/badge/tech-Vanilla_JS_|_HTML5_|_CSS3-orange)
![API](https://img.shields.io/badge/API-Gemini_2.0_Flash-purple)

---

## 📸 Demo

![Demo](./assets/demo.gif)

---

## 🌐 Live Links

- **Live Deployment:** [attiresense.demo.com](#) *(Placeholder)*
- **Documentation:** [Wiki / Docs](#) *(Placeholder)*

---

## ✨ Features

- **Personalized Recommendations:** Get outfit suggestions tailored to your gender, height, body shape, and skin tone.
- **Occasion & Climate Smart:** Recommendations adapt to your environment, climate, and specific events (e.g., casual Sunday, office meeting).
- **Interactive AI Stylist:** Chat directly with a Gemini-powered AI assistant for instant, context-aware fashion advice.
- **Color-Matched Outfits:** AI analyzes your skin tone to suggest colors that genuinely complement your natural complexion.
- **Local State Management:** Secure, client-side storage of your style profile and API preferences—no external database required.

---

## 🛠 Tech Stack

**Frontend:**
- Vanilla JavaScript (ES6+)
- HTML5
- CSS3 (Custom styling, CSS variables, Glassmorphism UI)

**Backend & APIs:**
- [Google Gemini 2.0 Flash API](https://deepmind.google/technologies/gemini/) (via REST) for natural language processing and outfit generation.

**Storage & State Management:**
- Browser `LocalStorage` for secure, offline-first persistence of user profiles and API keys.

**Deployment:**
- Designed to run on any local static server (e.g., `npx serve .`).

---

## 🚀 Installation & Setup

<details>
<summary>Click to expand setup instructions</summary>

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/AttireSense.git
cd AttireSense
```

### 2. Set up API Key
You will need a Google Gemini API Key. Since this project is entirely frontend-driven, you can input your API key directly within the app's settings UI or set it up via a local environment file.
- Copy `.env.example` to `.env` (if applicable) and add your Gemini API Key.

### 3. Run Locally
This application requires no build step. You can use any static server to run it. If you have Node.js installed:

```bash
npx serve .
```

Navigate to `http://localhost:3000` in your browser.
</details>

---

## 🏗 Architecture / How It Works

1. **Profile Building:** Users fill out a short, intuitive onboarding flow detailing their fashion preferences, body type, and environment.
2. **Local Storage:** This data is stored securely in the browser's `LocalStorage`.
3. **Prompt Engineering:** When the user asks for advice, `app.js` dynamically constructs a structured system prompt, injecting the user's profile data to give Gemini maximum context.
4. **AI Generation:** The app communicates via REST with the Google Gemini 2.0 Flash API to generate personalized recommendations.
5. **UI Rendering:** Unstructured AI text responses are parsed by a custom utility function (`renderAIMessage`) into beautifully structured, easy-to-read "Outfit Cards" with exact matching of emojis and labels.

---

## 💡 Technical Highlights & Learnings

- **Zero-Dependency Architecture:** Built entirely without massive frontend frameworks (like React or Vue) to demonstrate strong fundamentals in DOM manipulation, event handling, and state management in Vanilla JavaScript.
- **Robust AI Parsing:** Overcame the challenge of extracting structured data (specific clothing items and reasoning) from an LLM's unstructured text response. The app enforces a strict prompt structure and uses Regex-based parsing to reliably generate consistent UI components (Outfit Cards).
- **Secure Local State:** Engineered a seamless, database-free architecture. By persisting all preferences and API keys in `LocalStorage`, the app maintains user privacy and ensures rapid load times.

---

## 📬 Contact

- **LinkedIn:** [Your LinkedIn Profile](https://linkedin.com/in/yourprofile)
- **Portfolio:** [Your Portfolio Website](https://yourportfolio.com)
