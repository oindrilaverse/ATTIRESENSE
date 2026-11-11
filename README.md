# ✨ AttireSense

> **Look Better, Effortlessly.** An AI-powered personal stylist application that provides context-aware, personalized outfit recommendations based on individual style preferences, body type, and environment.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![Build](https://img.shields.io/badge/build-passing-brightgreen.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

---

## 📸 Visuals

![Demo](./assets/demo.gif)

---

## 🔗 Live Links

- **Live Demo**: [**AttireSense App**](#) *(Coming Soon)*
- **Repository**: [**GitHub Link**](#)

---

## 🚀 Features

- **Personalized Recommendations**: Evaluates user profile (skin tone, body type, style preferences) to dynamically curate cohesive outfits.
- **AI-Powered Styling**: Integrates seamlessly with the Google Gemini 2.0 Flash API to generate intelligent, context-sensitive fashion advice in real-time.
- **Context-Aware Decisions**: Actively adjusts outfit suggestions based on the specific occasion, local climate, and time of day to ensure relevance.
- **Local State Management**: Securely manages user profiles and API configurations using browser LocalStorage for a fast, backend-less experience.
- **Clean UI/UX**: Custom-built, responsive interface designed completely with vanilla web technologies for optimal performance without framework overhead.

---

## 💻 Tech Stack

### Languages & Frameworks
- Frontend: HTML5, CSS3, Vanilla JavaScript

### API & Storage
- External APIs: Google Gemini 2.0 Flash API (via REST)
- State Management: Browser LocalStorage

### Tools & Environments
- Deployment: Local static server

---

## 🛠 Installation & Setup

<details>
<summary>Click to expand setup instructions</summary>

### Prerequisites
- A static file server (e.g., Python 3 or Node.js)
- A Google Gemini API key

### Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/attiresense.git
   cd attiresense
   ```

2. **Configure Environment:**
   If available, create a `.env` file based on the provided `.env.example`. Alternatively, you can securely enter your Gemini API key directly into the application's UI modal upon launch.

3. **Run the Application:**
   This project leverages vanilla web technologies and does not require a complex build step. You can serve it directly:

   Using Python 3:
   ```bash
   python3 -m http.server 3000
   ```
   *or* using Node.js:
   ```bash
   npx serve .
   ```

4. **Access the Application:**
   Open your browser and navigate to `http://localhost:3000`.

</details>

---

## 🏗 Architecture / How it Works

AttireSense employs a lightweight, completely client-side architecture that eliminates traditional backend overhead:

1. **User Onboarding**: The user populates a comprehensive 9-factor profile (encompassing body type, style, environment, etc.), which is persisted directly to `LocalStorage`.
2. **AI Integration**: When a style query is initiated via the chat interface, the application synthesizes a tailored prompt that combines the local user profile state and the current conversational context.
3. **Data Fetching**: The synthesized prompt is securely transmitted via a REST call to the **Google Gemini 2.0 Flash API**.
4. **Rendering**: The AI response is parsed and beautifully rendered in the DOM using Vanilla JavaScript, presenting a cohesive outfit card alongside targeted color-matching and style rationale.

---

## 🌟 Technical Highlights & Learnings

- **Zero-Dependency Architecture**: Engineered the entire application without reliance on frontend frameworks like React or Vue. This deliberate constraint honed a deep proficiency in direct DOM manipulation, vanilla state management patterns, and complex custom CSS architecture.
- **Prompt Engineering**: Designed and refined robust system prompt templates for the Gemini API. This ensured consistent, structured, and highly relevant JSON/text responses tailored precisely to fashion mechanics and the specific output format required by the UI.
- **Client-Side Storage Strategy**: Implemented secure, persistent storage of sensitive user preferences and API credentials purely within the browser's LocalStorage, prioritizing a frictionless user experience while mitigating backend data liability.
- **Problem Solving**: Successfully overcame the challenge of reliably parsing unstructured AI text into a structured, aesthetically pleasing "Outfit Card" component using robust regular expressions and defensive string parsing techniques in JavaScript.

---

## 📬 Contact

- **Developer**: [Your Name]
- **Email**: [your.email@example.com]
- **LinkedIn**: [Your LinkedIn Profile](#)
- **Portfolio**: [Your Portfolio Website](#)

---
*Look Better, Effortlessly.*