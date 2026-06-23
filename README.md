# AttireSense ✨

> **Look Better, Effortlessly.**
> An AI-powered personal stylist that curates tailored outfit recommendations based on your unique body type, skin tone, environment, and personal style.

[![Build Status](https://img.shields.io/badge/build-passing-success)]()
[![License](https://img.shields.io/badge/license-MIT-blue.svg)]()
[![Tech Stack](https://img.shields.io/badge/stack-Vanilla%20JS%20%7C%20HTML5%20%7C%20CSS3-orange)]()
[![AI](https://img.shields.io/badge/AI-Gemini%202.0%20Flash-purple)]()

---

## 🎨 Visuals

<p align="center">
  <img src="./assets/demo.gif" alt="Demo" width="800"/>
</p>

---

## 🔗 Live Links

- **Live Deployment:** [AttireSense Demo](#) *(Replace with actual link)*
- **Documentation:** [Wiki / Docs](#) *(Replace with actual link)*

---

## 🚀 Features

- **Smart Profile Building:** Collects and processes 9 distinct user datapoints (gender, skin tone, height, body shape, age range, climate, environment, occasion, style preference) to inform AI responses.
- **Context-Aware Recommendations:** Utilizes the Google Gemini 2.0 Flash model via REST to synthesize user profiles into highly personalized, emoji-structured outfit cards.
- **Color Matching:** Suggests color palettes optimized for the user's selected skin tone and environment.
- **Local State Management:** Securely persists user profiles, preferences, and API configurations entirely within browser LocalStorage for privacy and fast retrieval without a backend database.
- **Zero-Dependency Frontend:** Built entirely with raw Vanilla JavaScript, HTML5, and CSS3 for an extremely lightweight, fast, and accessible user experience.

---

## 🛠 Tech Stack

<details>
<summary><b>Frontend</b></summary>
<ul>
  <li>Vanilla JavaScript (ES6+)</li>
  <li>HTML5 (Semantic & Accessible)</li>
  <li>CSS3 (Custom Properties, Grid, Flexbox, Animations)</li>
</ul>
</details>

<details>
<summary><b>Backend / APIs</b></summary>
<ul>
  <li>Google Gemini 2.0 Flash REST API (Direct Integration)</li>
</ul>
</details>

<details>
<summary><b>State Management</b></summary>
<ul>
  <li>Browser LocalStorage API</li>
</ul>
</details>

---

## 💻 Installation & Setup

<details>
<summary><b>Step-by-Step Guide</b></summary>

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/attiresense.git
   cd attiresense
   ```

2. **Configure Environment Variables:**
   - Review the `.env.example` file in the root directory.
   - For this project, API keys are configured client-side via the UI, but understanding the structure helps for future backend extraction.

3. **Run Locally:**
   Because this project is built with static files and Vanilla JS, it requires no package manager (no `package.json`). Simply serve the root directory.
   ```bash
   npx serve .
   ```
   *(Alternatively, use `python -m http.server`, Live Server extension in VS Code, or any static file server.)*

4. **Add your API Key:**
   - Open the application in your browser (e.g., `http://localhost:3000`).
   - Navigate to the API Key configuration (via the 🔑 icon) and input your Google Gemini API key.
</details>

---

## 🏗 Architecture / How it Works

The architecture emphasizes simplicity, performance, and privacy:

1. **User Onboarding Flow:** The user is guided through an interactive onboarding sequence (`onboarding.js`). Their inputs (skin tone, occasion, style, etc.) are immediately captured and stored locally via the `saveProfile` utility in `app.js`.
2. **Context Compilation:** When a user sends a message in the chat (`chat.js`), the application dynamically constructs a complex system prompt (`buildSystemPrompt` in `app.js`). This prompt merges the user's specific request with their saved LocalStorage profile, ensuring the AI has full context.
3. **AI Inference & Parsing:** A direct REST call is made to the Google Gemini 2.0 Flash endpoint. The raw text response is then processed by a custom parsing engine (`renderAIMessage`) that extracts specific markdown patterns and emojis to construct a stylized HTML "Outfit Card" dynamically.
4. **Stateless UI:** The UI immediately updates without requiring roundtrips to a custom backend, keeping the application fast and reducing architectural complexity.

---

## 🧠 Technical Highlights & Learnings

- **Prompt Engineering & Structured Output Parsing:** To ensure a consistent UI, I engineered the Gemini system prompt to strictly enforce a specific markdown and emoji-based format. I then wrote a robust custom parser in Vanilla JS to safely extract this data and inject it into pre-designed UI components, effectively turning unstructured LLM text into a structured, predictable data format.
- **State Management without Frameworks:** Managing complex, multi-step state across different pages (Onboarding -> Chat) without React or Redux required a disciplined approach to LocalStorage. I created a centralized utility (`app.js`) to handle reading, merging, and syncing profile state safely, preventing data corruption across page reloads.
- **XSS Prevention:** Directly rendering AI-generated text into the DOM poses cross-site scripting risks. I implemented a lightweight, custom HTML escaping utility (`escSafe`) to sanitize all AI outputs before they are processed by the markdown parser or injected via `innerHTML`.

---

## 📫 Contact

Feel free to reach out if you have any questions or want to discuss the project!

- **LinkedIn:** [Your LinkedIn Profile](#)
- **Portfolio:** [Your Portfolio](#)
- **GitHub:** [@yourusername](https://github.com/yourusername)
