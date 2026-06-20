<div align="center">

# ✨ AttireSense
**Look Better, Effortlessly**

*An AI-powered personal stylist that curates highly tailored outfit recommendations based on your unique body type, skin tone, and lifestyle.*

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg?style=flat-square)](#)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](#)
[![Gemini API](https://img.shields.io/badge/AI-Google_Gemini-8E75B2?style=flat-square)](#)

</div>

---

## 📸 Visuals

<div align="center">

![Demo](./assets/demo.gif)

*A seamless, interactive chat interface providing real-time styling advice.*

</div>

## 🚀 Live Links

- **Live Deployment:** [View the Live App Here](#) *(Replace with actual link)*
- **Documentation:** [Read the Docs](#) *(Replace with actual link)*

---

## ✨ Features

AttireSense was built with a relentless focus on user experience and delivering tangible, personalized value.

*   **Color-Matched Outfits:** Advanced AI logic analyzes the user's skin tone and recommends colors that naturally complement their complexion, eliminating the guesswork from color theory.
*   **Body-Type Aware Recommendations:** Clothing suggestions are algorithmically tailored to the user's specific height, build, and unique body shape to ensure a perfect fit.
*   **Occasion & Climate Smart:** Whether it's a corporate meeting, a casual weekend, rain, or shine, the system dynamically adapts styling recommendations to fit the immediate context.
*   **Interactive AI Chat Interface:** A fluid, real-time conversational interface powered by Gemini 2.0, complete with custom-rendered outfit cards and typing indicators.
*   **Persistent & Secure Profile:** Zero-backend architecture utilizing browser `localStorage` ensures user data and style preferences remain entirely private and persist across sessions.

---

## 🛠️ Tech Stack

AttireSense demonstrates a strong grasp of core web technologies and API integration, built entirely without heavy frontend frameworks to ensure maximum performance and zero dependency bloat.

*   **Frontend:** Vanilla JavaScript (ES6+), HTML5, CSS3 (Custom CSS Variables, Grid, Flexbox, Animations).
*   **AI / Backend Logic:** Google Gemini 2.0 Flash API (REST Integration).
*   **State Management:** Native Browser `localStorage`.
*   **Deployment:** Vercel / GitHub Pages *(Placeholder)*.

---

## ⚙️ Installation & Setup

<details>
<summary><strong>Click to expand step-by-step installation instructions</strong></summary>

Getting AttireSense running locally is incredibly straightforward as it requires no build steps or package managers.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/attiresense.git
   cd attiresense
   ```

2. **Serve locally:**
   Since this is a static frontend project, you can use any static server. If you have Node.js installed:
   ```bash
   npx serve .
   ```
   Alternatively, use VS Code's "Live Server" extension.

3. **Configure the Environment / API Key:**
   - There is no need for an `.env` file since this is a client-side application.
   - Obtain a free Gemini API Key from [Google AI Studio](https://aistudio.google.com/).
   - Open the app in your browser, click the "🔑 Set Key" button in the chat interface, and securely input your key. The key is stored locally on your device.

</details>

---

## 🏗️ Architecture & How it Works

AttireSense operates on a fast, decoupled, client-side architecture:

1. **Profile Generation (`onboarding.js`):** Users complete a streamlined onboarding flow. Their choices (gender, skin tone, environment, etc.) are validated and merged into a profile object securely stored in `localStorage`.
2. **Contextual Prompting (`app.js`):** When the user initiates a chat, the application intercepts the request and constructs a highly engineered system prompt. This prompt combines the user's saved profile with strict formatting instructions.
3. **AI Generation & Custom Rendering (`chat.js`):** The prompt is sent to the Gemini API. The response is intercepted by a custom parser (`renderAIMessage`) which uses Regular Expressions to detect specific formatting markers. Instead of just dumping raw text, it extracts the data and dynamically injects it into beautifully styled, DOM-manipulated HTML "Outfit Cards".

---

## 💡 Technical Highlights & Learnings

Building AttireSense presented several engineering challenges that were overcome through clean code and modern development practices:

*   **Prompt Engineering for Structured Outputs:** One of the biggest challenges with LLMs is ensuring consistent output formats. I designed a multi-layered system prompt with specific emoji-based markers (e.g., `👕 Top:`), which forces the AI to structure its response predictably.
*   **Custom Markdown & UI Renderer:** Instead of relying on heavy third-party markdown libraries, I built a lightweight, regex-based parser (`markdownLite`) from scratch. This parser reliably extracts outfit sections from the AI's response and renders them into custom, CSS-styled UI components, demonstrating strong string manipulation and DOM rendering skills.
*   **Framework-less Architecture:** I chose to build this application using Vanilla JS, HTML, and CSS. This decision allowed me to demonstrate a deep, fundamental understanding of JavaScript event delegation, state management, and modern CSS layout techniques (Grid/Flexbox) without the abstraction of React or Vue.
*   **Client-Side State Security:** By utilizing `localStorage` for both the user profile and the API key, the application remains fully functional and personalized while adhering to strict privacy principles—user data never leaves their device.

---

## 📫 Contact

If you're a recruiter or hiring manager looking for a detail-oriented, product-minded engineer, let's connect!

*   **LinkedIn:** [Your Name](https://linkedin.com/in/yourprofile)
*   **Portfolio:** [yourportfolio.com](https://yourportfolio.com)
*   **GitHub:** [@yourusername](https://github.com/yourusername)
*   **Email:** your.email@example.com

<div align="center">
  <sub>Built with ❤️ and clean code.</sub>
</div>
