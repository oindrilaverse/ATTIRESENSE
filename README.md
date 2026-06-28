<div align="center">

# AttireSense

**Look Better, Effortlessly.** An AI-powered personal stylist application that provides context-aware outfit recommendations tailored to your unique body type, skin tone, climate, and style preferences.

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](#)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](#)
[![Vanilla JS](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](#)
[![Gemini API](https://img.shields.io/badge/Gemini_2.0_Flash-4A2898?style=for-the-badge&logo=google-gemini&logoColor=white)](#)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](#)

![Demo](./assets/demo.gif)

**[🔗 Live Deployment](#) | [📄 Documentation](#)**

</div>

---

## 🚀 Features

*   **Context-Aware Outfit Recommendations**: Leverages AI to analyze user-specific parameters (skin tone, body shape, height) alongside contextual factors (climate, environment, occasion) to deliver highly personalized styling advice.
*   **Intelligent Conversational Interface**: A fluid chat interface powered by Google Gemini 2.0 Flash API, allowing users to ask specific styling questions (e.g., "What should I wear for a job interview in winter?") and receive instant, structured responses.
*   **Privacy-First Architecture**: Implements secure client-side state management. User profile preferences and API keys are stored locally using browser LocalStorage, ensuring sensitive data never leaves the client unnecessarily.
*   **Zero-Dependency Frontend**: Built entirely with Vanilla JavaScript, HTML5, and CSS3. Demonstrates a strong command of the DOM, custom CSS variables, responsive design, and modular JavaScript without relying on heavy frameworks like React or Vue.
*   **Dynamic UI & Animations**: Features a highly polished, responsive, and accessible user interface with smooth CSS animations, glassmorphism design elements, and interactive state transitions.

## 💻 Tech Stack

*   **Frontend**: HTML5, CSS3 (Custom Properties, Flexbox, CSS Grid), Vanilla JavaScript (ES6+).
*   **Backend / APIs**: Google Gemini 2.0 Flash API (Integrated via REST).
*   **State Management**: Browser LocalStorage API (zero external database dependencies).
*   **Deployment**: Static hosting ready (e.g., Vercel, Netlify, GitHub Pages).

## 🛠 Installation & Setup

<details>
<summary><strong>Show Instructions</strong></summary>
<br>

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/attiresense.git
    cd attiresense
    ```

2.  **No package installations required:**
    Because the project uses zero external npm dependencies for the frontend, there is no `package.json` to install from.

3.  **Environment Variables:**
    The application requests the API key dynamically through the UI. However, for continuous development, you can set up an `.env.example` file to denote required variables if transitioning to a build step later. Currently, you only need to obtain a free **Google Gemini API Key** from [Google AI Studio](https://aistudio.google.com/app/apikey).

4.  **Run the application locally:**
    You can use any static server. A quick way is using `serve`:
    ```bash
    npx serve .
    ```

5.  **Access the app:**
    Open `http://localhost:3000` (or the port provided by your server) in your browser. Enter your Gemini API key when prompted in the chat interface.

</details>

## 🏗 Architecture / How it Works

AttireSense operates entirely on the client side, interacting directly with the Google Gemini API via REST.

1.  **Onboarding Flow**: The user completes a multi-step onboarding process. The application collects styling parameters (e.g., gender, skin tone, body shape, environment) and persists them securely using `LocalStorage`.
2.  **Prompt Engineering**: When a user initiates a chat, the application constructs a comprehensive system prompt by dynamically injecting the user's saved profile data.
3.  **API Communication**: The frontend orchestrates a REST API call to the Gemini 2.0 Flash endpoint. It handles network latency, manages conversational history state, and gracefully renders loading/typing indicators.
4.  **Response Rendering**: The AI's JSON/Text response is parsed and securely sanitized (escaping HTML) before being injected into the DOM, preventing XSS vulnerabilities.

## 🧠 Technical Highlights & Learnings

*   **Framework-less Complexity**: Building a sophisticated chat interface and multi-step form flow using pure Vanilla JavaScript was a deliberate challenge. It required a deep understanding of DOM manipulation, event delegation, and state management techniques often abstracted away by frameworks. This resulted in a highly performant application with an incredibly small footprint.
*   **Handling Asynchronous AI Responses**: Implementing realistic typing indicators and managing the chat history state dynamically required robust asynchronous JavaScript (`async`/`await`). Overcoming edge cases where users send rapid consecutive messages was handled by implementing request debouncing and strict state flags (`isTyping`).
*   **Security & Privacy**: A key challenge was managing the Gemini API key securely. Instead of proxying through a backend (which would introduce server costs and complexity for a static app), the application delegates the responsibility to the user. Storing the API key strictly in LocalStorage ensures complete user privacy and demonstrates an understanding of client-side security trade-offs.

## 📬 Contact

**Your Name**
*Senior Software Engineer*

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](#)
[![Portfolio](https://img.shields.io/badge/Portfolio-252525?style=for-the-badge&logo=mac-os&logoColor=white)](#)
