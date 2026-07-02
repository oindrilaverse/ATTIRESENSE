# AttireSense ✨
> Look Better, Effortlessly

![Build Status](https://img.shields.io/badge/build-passing-success?style=flat-square) ![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square) ![Tech Stack](https://img.shields.io/badge/tech%20stack-Vanilla%20JS%20%7C%20HTML5%20%7C%20CSS3-yellow.svg?style=flat-square) ![API](https://img.shields.io/badge/API-Google%20Gemini%202.0-blueviolet?style=flat-square)

AttireSense is an AI-powered personal stylist application. It learns your body type, skin tone, and style preferences to suggest the perfect outfit for any occasion—taking the stress out of getting dressed.

---

## 📸 Visuals

![Demo](./assets/demo.gif)

---

## 🔗 Live Links

- **Live Deployment:** [AttireSense App](#) *(Coming Soon)*
- **Documentation:** [Wiki/Docs](#) *(Coming Soon)*

---

## 🚀 Features

- **Color-Matched Outfits:** AI analyzes user skin tone and recommends complementing colors.
- **Body-Type Aware:** Tailored clothing suggestions fitting individual proportions and body shapes.
- **Occasion & Climate Smart:** Adapts recommendations based on context—weather, setting, or event.
- **Interactive AI Stylist Chat:** Get real-time, personalized outfit recommendations in a chat interface powered by Gemini 2.0.
- **Client-Side Profile Management:** Locally stored, privacy-first user profiles and settings using browser `localStorage`.
- **Responsive & Modern UI:** A fully custom, glassmorphism-inspired design crafted without external UI frameworks.

---

## 🛠 Tech Stack

- **Frontend:** Vanilla JavaScript (ES6+), HTML5, CSS3 (Custom Variables, Flexbox, CSS Grid)
- **State Management:** Browser `localStorage` (Privacy-first design)
- **API Integration:** Google Gemini 2.0 Flash via REST API
- **Deployment:** Vercel / Netlify / GitHub Pages (Static hosting compatible)

---

## ⚙️ Installation & Setup

<details>
<summary>Click to expand setup instructions</summary>

This project runs completely locally with no complex build steps or dependencies.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/attiresense.git
   cd attiresense
   ```

2. **Environment Configuration:**
   - Since the app stores the API key in the browser's `localStorage` via the UI, no `.env` file is strictly required for the build.
   - However, for local testing, you can create an `.env.example` file to document required keys if you decide to build a backend proxy later.

3. **Run the application locally:**
   You can use any static server. For example, using Python:
   ```bash
   python3 -m http.server 3000
   ```
   Or using Node.js `serve` package:
   ```bash
   npx serve .
   ```

4. **Access the App:**
   Open your browser and navigate to `http://localhost:3000`.

5. **Configure API Key in UI:**
   - Get a free API key from [Google AI Studio](https://aistudio.google.com/app/apikey).
   - In the application, click on **🔑 API Key** in the navigation bar to enter and save your key.

</details>

---

## 🏗 Architecture / How it Works

AttireSense is designed as a lightweight, zero-dependency frontend application.

1. **User Profiling Flow:** The user completes an onboarding flow (`onboarding.js`). Their preferences (gender, skin tone, height, etc.) are validated and stored entirely on the client side using `localStorage`.
2. **Dynamic Prompt Engineering:** The `buildSystemPrompt` utility (in `app.js`) takes the stored user profile and constructs a detailed system prompt. This ensures the AI model's context is fully customized per user.
3. **AI Integration:** The chat interface (`chat.js`) handles user input and securely communicates with the Google Gemini 2.0 Flash model via its REST endpoint.
4. **Structured Parsing:** The response text from the AI is parsed client-side using custom Regex logic (`renderAIMessage`). This extracts specific clothing items (Top, Bottom, Shoes, etc.) and renders them as styled, interactive HTML outfit cards.

---

## 🧠 Technical Highlights & Learnings

- **Vanilla JS Architecture:** To ensure maximum performance and minimal footprint, this project eschews heavy frameworks (like React or Vue). It handles DOM manipulation, state routing, and API calls via pure JavaScript, demonstrating strong foundational web development skills.
- **Custom Parsing Engine:** A major challenge was ensuring the LLM (Gemini) consistently returned data that could be structured into a UI component. I solved this by explicitly instructing the AI to use specific emoji markers (e.g., `👕 Top:`) and writing a custom parsing function (`renderAIMessage`) to extract these markers safely, escaping HTML to prevent XSS attacks while allowing rich output formatting.
- **Privacy-First Data Storage:** Handling API keys and personal user data requires care. By leveraging `localStorage`, sensitive information never leaves the user's browser, reducing server liability and simplifying the deployment architecture.

---

## 📬 Contact

- **LinkedIn:** [Your Name](https://linkedin.com/in/yourprofile)
- **Portfolio:** [yourportfolio.com](https://yourportfolio.com)
