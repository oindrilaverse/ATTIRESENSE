# AttireSense ✨

Look Better, Effortlessly. Your personal AI-powered fashion assistant that provides personalized outfit recommendations based on your unique style, body, and occasion.

[![Build Status](https://img.shields.io/badge/build-passing-success?style=flat-square)](#)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![JavaScript](https://img.shields.io/badge/Vanilla-JS-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](#)
[![Gemini 2.0](https://img.shields.io/badge/AI-Gemini_2.0_Flash-4285F4?style=flat-square&logo=google)](#)

---

## Visuals

![Demo](./assets/demo.gif)

---

## Live Links

**[Live Deployment Placeholder URL]** | **[Documentation Placeholder URL]**

---

## Features

*   **Color-Matched Outfits**: AI analyzes your skin tone and recommends colors that genuinely complement your natural complexion—no guesswork.
*   **Body-Type Aware**: Clothes that fit *your* proportions. Styling tips tailored to your height, build, and unique body shape.
*   **Occasion & Climate Smart**: Office meeting, date night, or casual Sunday? Rain or shine? AttireSense adapts every recommendation to your context.
*   **Conversational AI Stylist**: Chat naturally with your stylist powered by Gemini 2.0 Flash to request specific outfits or general fashion advice.
*   **Privacy-First Profile**: User profile and API keys are stored entirely in your browser's Local Storage.

---

## Tech Stack

*   **Frontend**: Vanilla JavaScript (ES6+), HTML5, CSS3 (Custom Variables, Flexbox/Grid)
*   **Backend / Storage**: None required. State management and data storage (user profile, API keys) are handled locally using browser Local Storage.
*   **APIs Utilized**: Google Gemini 2.0 Flash REST API (via `https://generativelanguage.googleapis.com`)
*   **Deployment**: Local / Static Hosting compatible.

---

## Installation & Setup

<details>
<summary><strong>Click to expand setup instructions</strong></summary>

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/attiresense.git
    cd attiresense
    ```

2.  **Environment Setup (`.env.example`):**
    This project does not require a backend `.env` file since API calls are made from the client. However, you will need a Google Gemini API key.

    *   Get a free API key at [Google AI Studio](https://aistudio.google.com/app/apikey).
    *   When you run the app and access the Chat, you will be prompted to securely enter and save your API key in the browser's Local Storage.

3.  **Run Locally:**
    Since this is a static site without a build step, you can use any static file server.
    ```bash
    # Using Python
    python3 -m http.server 3000

    # Or using Node.js (npx)
    npx serve .
    ```

4.  **Open in Browser:**
    Navigate to `http://localhost:3000` to view the application.

</details>

---

## Architecture / How it Works

AttireSense is designed as a lightweight, zero-build client-side application.

1.  **Onboarding & Profile Management (`onboarding.js`, `app.js`)**: Users input their physical characteristics and style preferences. This data is serialized and persisted in the browser's Local Storage (`attireSenseProfile`).
2.  **AI Integration (`chat.js`)**: When a user asks for fashion advice, the app constructs a dynamic "System Prompt". This prompt injects the user's Local Storage profile data and enforces a strict output schema (using emoji markers like 👕, 👖) for the Gemini 2.0 Flash API.
3.  **Dynamic Rendering**: The raw markdown response from Gemini is parsed by a custom lightweight markdown parser (`markdownLite` in `app.js`), which identifies the requested emoji markers to beautifully render structured "Outfit Cards" in the UI.

---

## Technical Highlights & Learnings

*   **State Management Without Frameworks**: Engineered a resilient, modular approach to state management across multiple pages (`index.html`, `onboarding.html`, `chat.html`) utilizing shared utility functions and Local Storage, demonstrating a deep understanding of DOM lifecycle and browser APIs without relying on React or Vue.
*   **Advanced Prompt Engineering & Strict Output Parsing**: Overcame the challenge of unpredictable LLM outputs by designing a highly specific system instruction set. Built a custom, robust parsing algorithm in JavaScript that reliably extracts structured outfit components from Gemini's free-text responses to render beautiful UI cards, falling back gracefully to standard chat bubbles for general conversation.
*   **Responsive, "Glassmorphism" UI/UX**: Designed and implemented a modern, performant CSS architecture from scratch. Utilized CSS variables for consistent theming and complex animations (shimmers, floating orbs) to create an engaging, app-like experience using only Vanilla CSS.
*   **Client-Side API Security Awareness**: Handled external API integration directly from the client. While typically a security risk, mitigated exposure by requiring users to supply their own API keys, securely storing them in Local Storage rather than hardcoding or transmitting them through an intermediary server.

---

## Contact

**[Your Name]**
*   **LinkedIn**: [linkedin.com/in/yourprofile](#)
*   **Portfolio**: [yourportfolio.com](#)
*   **Email**: [your.email@example.com](mailto:your.email@example.com)
