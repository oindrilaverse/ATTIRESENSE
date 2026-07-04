# AttireSense ✨

> **Look Better, Effortlessly.**
> An AI-powered personal stylist that curates highly personalized outfit recommendations based on your unique body type, skin tone, environment, and style preferences.

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)](#)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Tech Stack: Vanilla JS](https://img.shields.io/badge/Tech-Vanilla%20JS-yellow.svg)](#)
[![AI: Gemini 2.0 Flash](https://img.shields.io/badge/AI-Gemini%202.0%20Flash-purple.svg)](#)

---

## 🎨 Visuals

![Demo](./assets/demo.gif)

---

## 🔗 Live Links

- **Live Deployment:** [AttireSense App](#) *(Coming Soon)*
- **API Documentation:** [Google Gemini API Docs](https://ai.google.dev/docs)

---

## ✨ Features

- **Hyper-Personalized Styling:** Dynamically generates outfit recommendations tailored to 8 distinct user profile factors (gender, skin tone, height, body shape, age range, climate, environment, occasion).
- **Intelligent Color Matching:** Suggests color palettes that complement the user's natural complexion rather than generic trends.
- **Context-Aware Recommendations:** Adjusts suggestions based on specific climates and professional/casual environments.
- **Structured AI Output Parsing:** Converts unstructured conversational AI text into a beautifully structured, readable UI card components on the fly.
- **Zero-Dependency Architecture:** Built entirely without heavy frontend frameworks, prioritizing lightning-fast load times and raw performance.
- **Local First Data Privacy:** User profile data and API keys are stored securely in browser `localStorage`, ensuring zero server-side data retention.

---

## 🛠 Tech Stack

**Frontend:**
- HTML5 & CSS3 (Custom responsive design system, CSS Variables for theming)
- Vanilla JavaScript (ES6+)
- DOM Manipulation & State Management (No React/Vue/Angular)

**Backend / APIs:**
- [Google Gemini 2.0 Flash REST API](https://ai.google.dev/) (For generative AI styling logic)

**Storage:**
- Browser `localStorage`

---

## 🚀 Installation & Setup

AttireSense is designed to be lightweight and easy to run locally without complex build steps.

<details>
<summary><b>Click to expand setup instructions</b></summary>
<br>

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/attiresense.git
   cd attiresense
   ```

2. **Set up Environment Variables:**
   - Create a `.env` file based on the provided example. (Note: The application primarily accepts the API key via the secure UI modal, but establishing the `.env` convention is recommended for local development).
   ```bash
   cp .env.example .env
   ```
   - Add your Gemini API key to the `.env` file or paste it into the UI modal when running the app.

3. **Run the local server:**
   Since this is a vanilla HTML/JS project, you just need a static file server.

   Using Python:
   ```bash
   python3 -m http.server 3000
   ```

   Using Node (npx):
   ```bash
   npx serve .
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000` to start using AttireSense.

</details>

---

## 🏗 Architecture / How it Works

AttireSense operates on a strictly client-side architecture for maximum speed and privacy:

1. **State Management:** User preferences are captured through the onboarding UI and persisted in `localStorage`.
2. **Prompt Engineering Engine:** The `buildSystemPrompt` utility dynamically constructs a highly specific, rule-based prompt by combining the static system instructions with the dynamic user profile from `localStorage`.
3. **API Orchestration:** The client sends a REST request directly to the Gemini 2.0 Flash API using the native `fetch` API.
4. **Intelligent Parsing:** The custom `renderAIMessage` function acts as a client-side parser, using regex patterns to identify specific outfit components (Top, Bottom, Shoes, etc.) within the unstructured AI response.
5. **UI Rendering:** The parsed data is mapped to structured HTML card components and injected into the DOM, providing a clean, accessible user experience.

---

## 🧠 Technical Highlights & Learnings

- **Unstructured to Structured Data:** One of the core challenges was ensuring the LLM consistently returns data that can be rendered beautifully. I solved this by implementing strict few-shot prompting guidelines and a robust regex-based parser in JavaScript that gracefully falls back to formatted markdown if the AI strays from the requested structure.
- **Frameworkless State Management:** Building a dynamic chat application without React or Vue reinforced my understanding of native DOM manipulation, event delegation, and efficient local state synchronization.
- **Security & Privacy by Design:** By explicitly designing the app to keep the API key and personal data in `localStorage`, the architecture inherently respects user privacy and avoids the need for a complex backend infrastructure.

---

## 📫 Contact

- **LinkedIn:** [Your LinkedIn Profile](https://linkedin.com/in/yourprofile)
- **Portfolio:** [Your Portfolio Website](https://yourportfolio.com)
- **GitHub:** [yourusername](https://github.com/yourusername)
