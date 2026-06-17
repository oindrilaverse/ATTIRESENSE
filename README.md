# ✨ AttireSense

> **Look Better, Effortlessly.** AttireSense is an AI-powered personal stylist that provides highly personalized outfit recommendations based on your unique body type, style preferences, and daily context.

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)
![Tech Stack](https://img.shields.io/badge/Tech_Stack-Vanilla_JS_|_HTML5_|_CSS3-blueviolet)

---

## Visuals
![Demo](./assets/demo.gif)

## Live Links
- **[Live Deployment](https://your-deployment-link.com)** (Placeholder)
- **[Documentation](https://your-documentation-link.com)** (Placeholder)

## Features
- 🎨 **Color-Matched Outfits:** AI analyzes your skin tone and recommends colors that genuinely complement your natural complexion—no guesswork.
- 🧍 **Body-Type Aware:** Clothes that fit your proportions. Styling tips tailored to your height, build, and unique body shape.
- 📍 **Occasion & Climate Smart:** Office meeting, date night, or casual Sunday? Rain or shine? AttireSense adapts every recommendation to your context.
- 🔒 **Privacy-First State Management:** User profiles and API keys are securely stored locally in your browser using `localStorage`. No databases or tracking.
- 💬 **Intelligent Chat Interface:** Seamlessly converse with your AI stylist powered by the Google Gemini 2.0 Flash API, receiving structured and beautifully formatted outfit cards.

## Tech Stack
**Frontend:**
- HTML5 (Semantic Structure)
- CSS3 (Custom Glassmorphism UI, CSS Variables, Animations - no external frameworks)
- Vanilla JavaScript (DOM manipulation, LocalStorage integration)

**Backend & APIs:**
- Google Gemini 2.0 Flash API (Generative AI REST Integration)

**Deployment & Local Development:**
- Static Server (e.g., `serve` or `http-server`)
- Vercel / Netlify / GitHub Pages (for production deployment)

## Installation & Setup

<details>
<summary><strong>Click to view step-by-step installation instructions</strong></summary>

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/AttireSense.git
   cd AttireSense
   ```

2. **Start a local development server:**
   Since this is a vanilla frontend application, you just need to serve the static files. You can use `serve` via `npx`:
   ```bash
   npx serve .
   ```
   *(Alternatively, you can use `python3 -m http.server`, VS Code Live Server, or any static file server.)*

3. **Set up your Gemini API Key:**
   - Go to [Google AI Studio](https://aistudio.google.com/app/apikey) to generate a free Gemini API key.
   - Open the application in your browser (usually `http://localhost:3000`).
   - Click the "🔑 API Key" button in the navigation bar.
   - Enter your key and save. It will be stored securely in your browser's local storage.
   - *Note: No `.env` file is required since the application is fully client-side and handles the API key securely through the user interface.*

</details>

## Architecture / How it Works
AttireSense leverages a pure client-side architecture to deliver a seamless and privacy-focused experience:
1. **User Onboarding:** The user completes a quick 9-question onboarding flow detailing their gender, skin tone, body shape, climate, and style preferences.
2. **Local State Management:** This profile data is immediately serialized and saved to the browser's `localStorage` via a shared utilities script (`app.js`).
3. **Context-Aware Prompting:** When the user interacts with the chat interface (`chat.js`), the application retrieves the profile from `localStorage` and constructs a dynamic system prompt. This prompt forces the Gemini API to respond in a strict, structured format.
4. **AI Generation & Parsing:** The Gemini 2.0 Flash API processes the contextual prompt and user query via a REST call. The application then uses custom regex parsing (`renderAIMessage`) to convert the unstructured markdown text into a beautifully formatted, modular HTML outfit card.

## Technical Highlights & Learnings
- **Parsing Unstructured AI Output into Structured UI:** One of the main challenges was ensuring the AI consistently outputted data that could be rendered as an appealing UI card rather than a wall of text. I solved this by highly engineering the system prompt to require specific emoji headers (e.g., `👕 Top:`), and then building a robust vanilla JavaScript regex parser that intercepts the stream, extracts the sections, and injects them into custom HTML templates.
- **Framework-less State Management:** To keep the application lightweight, I opted out of using heavy frameworks like React or Redux. Instead, I built a reliable, modular `localStorage` wrapper that handles state hydration and persistence effortlessly across different pages (landing, onboarding, chat).
- **Custom Glassmorphism UI:** I designed and implemented a modern, responsive "glassmorphism" aesthetic from scratch using pure CSS3. This involved mastering CSS variables for theming, backdrop-filters for the glass effect, and custom keyframe animations to create dynamic, floating background orbs that enhance the premium feel of the app.

## Contact
- **LinkedIn:** [Your LinkedIn Profile](https://linkedin.com/in/yourprofile)
- **Portfolio:** [Your Portfolio Website](https://yourportfolio.com)
- **Email:** your.email@example.com
