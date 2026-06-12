<div align="center">

# ✨ AttireSense

**Your Personal AI-Powered Fashion Assistant.**
*AttireSense leverages the Google Gemini 2.0 Flash API to provide personalized outfit recommendations based on your unique body type, skin tone, environment, and style preferences.*

[![Build Status](https://img.shields.io/badge/build-passing-success?style=flat-square)](#)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](#)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](#)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](#)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](#)

![Demo](./assets/demo.gif)

</div>

## 🌐 Live Links

**[Live Deployment](#) | [Project Documentation](#)**

---

## 🎯 Features

AttireSense focuses on delivering a seamless, highly customized user experience while keeping the technical overhead minimal.

*   **Intelligent Outfit Recommendations:** Analyzes 9 different profile factors (e.g., skin tone, body shape, occasion) to curate precise, context-aware outfit suggestions.
*   **Custom Markdown Parsing Engine:** Implements a tailored parsing logic that converts AI-generated text into beautiful, structured outfit cards (Top, Bottom, Shoes, Accessories) without relying on heavy frontend frameworks.
*   **Zero-Dependency Frontend:** Built entirely with Vanilla JavaScript, HTML5, and modern CSS3, ensuring lightning-fast load times and a highly maintainable codebase.
*   **Client-Side State Management:** Utilizes browser LocalStorage to securely save user profile data and API configurations locally, ensuring privacy and eliminating the need for a complex backend infrastructure.
*   **Conversational AI Interface:** Features a fluid, chat-like UI powered by the Gemini REST API, complete with interactive typing indicators and contextual follow-up suggestions.

---

## 💻 Tech Stack

**Frontend**
*   **Language:** Vanilla JavaScript (ES6+)
*   **Markup/Styling:** HTML5, CSS3 (Custom Variables, Flexbox, CSS Grid)
*   **State Management:** Browser LocalStorage

**Backend & APIs**
*   **AI Engine:** Google Gemini 2.0 Flash (via REST API)

**Tooling & Deployment**
*   **Server:** Static File Server (e.g., `npx serve`)
*   **Deployment:** (Your Deployment Platform, e.g., Vercel, Netlify, GitHub Pages)

---

## 🚀 Installation & Setup

You can run this project locally with just a few steps. It requires zero build tools.

<details>
<summary><b>Click to expand setup instructions</b></summary>

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/attiresense.git
    cd attiresense
    ```

2.  **Run a local static server:**
    Since this is a vanilla web application, you can serve it using any simple static server. If you have Node.js installed:
    ```bash
    npx serve .
    ```
    Alternatively, you can use Python:
    ```bash
    python3 -m http.server 3000
    ```

3.  **Set up Environment / API Key:**
    AttireSense securely stores your API key in the browser.
    *   Navigate to the local URL (e.g., `http://localhost:3000`).
    *   Click on the **🔑 API Key** button in the navigation bar.
    *   Enter your [Google Gemini API Key](https://aistudio.google.com/app/apikey).
    *   *(Note: While some projects use `.env` files or `.env.example`, AttireSense is designed to run entirely client-side, making LocalStorage the ideal secure storage mechanism for the user's personal key without needing backend environment variables.)*

4.  **Start Chatting:**
    Fill out your style profile and ask the AI for your first recommendation!

</details>

---

## 🏗️ Architecture & How It Works

AttireSense follows a lightweight, edge-ready architecture that minimizes latency and server costs.

1.  **Data Capture:** User preferences (gender, skin tone, climate, etc.) are captured via the UI and saved directly to `LocalStorage`.
2.  **Prompt Engineering:** When a user requests an outfit, the application constructs a highly specific "System Prompt." This prompt dynamically injects the user's LocalStorage profile data and strict formatting rules.
3.  **AI Inference:** The client makes a direct REST API call to the Gemini 2.0 Flash endpoint.
4.  **Custom Rendering:** The AI responds with structured text. A custom parser (`renderAIMessage`) intercepts this response, using Regular Expressions to extract specific clothing items (👕 Top, 👖 Bottom) and injects them into styled DOM nodes, falling back to a lightweight Markdown renderer for general conversational text.

---

## 🧠 Technical Highlights & Learnings

Building a robust application without major frameworks presents unique engineering challenges. Here is how I approached them:

*   **Challenge: Unpredictable LLM Outputs.** AI models can deviate from requested formats, which breaks UI components.
    *   **Solution:** I engineered a robust system prompt with strict, emoji-based delimiters (`👕 Top:`, `💡 Why this works:`). I then built a resilient parsing algorithm (`renderAIMessage`) that gracefully falls back to a conversational bubble if the AI fails to generate the required structure, preventing UI crashes.
*   **Challenge: Security without a Backend.** How do we allow users to interact with a paid API without exposing a hardcoded API key in the source code or requiring a complex backend proxy?
    *   **Solution:** I implemented a "Bring Your Own Key" (BYOK) architecture. The application stores the user's Gemini API key in LocalStorage. This completely offloads API usage to the end-user, ensuring zero cost to the host and maximum privacy for the user's profile data.
*   **Challenge: State Management in Vanilla JS.** Keeping the UI in sync with user preferences across multiple pages without Redux or React Context.
    *   **Solution:** I abstracted a lightweight utility layer (`getProfile`, `saveProfile`) over LocalStorage. This acts as a single source of truth that the DOM queries on initialization, ensuring the UI remains consistent.

---

## 📫 Contact

I am a software engineer passionate about building clean, user-centric applications. Let's connect!

*   **LinkedIn:** [Your LinkedIn Profile](https://linkedin.com/in/yourprofile)
*   **Portfolio:** [Your Portfolio Website](https://yourportfolio.com)
*   **Email:** [your.email@example.com](mailto:your.email@example.com)
