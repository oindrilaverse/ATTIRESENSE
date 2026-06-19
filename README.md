# ✨ AttireSense

> **Look Better, Effortlessly.** AttireSense is an AI-powered personal stylist that curates hyper-personalized outfit recommendations based on your unique body type, style preferences, and daily context.

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)
![Tech Stack](https://img.shields.io/badge/tech-Vanilla_JS-f7df1e)
![API](https://img.shields.io/badge/API-Google_Gemini-4285F4)

---

## 📷 Visuals

![Demo](./assets/demo.gif)

---

## 🔗 Live Links

**[🌐 Live Deployment](https://attiresense-demo.com)** *(Placeholder)*
**[📖 Project Documentation](https://github.com/yourusername/attiresense/wiki)** *(Placeholder)*

---

## 🌟 Features

*   **Hyper-Personalized Styling:** Analyzes 9 different profile factors (including skin tone, height, and body shape) to deliver 100% personalized recommendations.
*   **Context-Aware Engine:** Dynamically adjusts outfit suggestions based on the user's climate, environment (e.g., office vs. casual), and specific occasion.
*   **Intelligent Prompt Engineering:** Uses tailored system instructions to ensure the AI considers nuanced fashion rules, rather than generating generic advice.
*   **Seamless Chat Interface:** A highly responsive, conversational UI that feels natural and instantaneous.
*   **Zero-Backend Architecture:** Operates entirely client-side, persisting user state locally for privacy and speed, while securely calling the Gemini API.

---

## 💻 Tech Stack

*   **Frontend:** Vanilla JavaScript (ES6+), HTML5, CSS3
*   **State Management:** Browser `LocalStorage`
*   **AI / API Integration:** Google Gemini 2.0 Flash (via REST API)
*   **Deployment / Hosting:** Static hosting compatible (e.g., Vercel, Netlify, GitHub Pages)

---

## 🚀 Installation & Setup

<details>
<summary>Click here for step-by-step local setup instructions</summary>

### Prerequisites
*   Node.js (for serving locally)
*   A Google Gemini API Key

### Steps

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/attiresense.git
    cd attiresense
    ```

2.  **Environment Setup:**
    Since this is a client-side application, the Gemini API key is configured dynamically within the UI for security. There is no hardcoded `.env` file required for deployment, though you may create an `.env.example` to track necessary keys for potential future backend proxy setups.

3.  **Run the local server:**
    The project requires no build tools or package managers (no `package.json`). You can serve it using any static server.
    ```bash
    npx serve .
    ```

4.  **Open the app:**
    Navigate to `http://localhost:3000` (or the port specified by your static server) in your browser.

5.  **Configure API Key:**
    Upon launching the chat interface, you will be prompted to enter your Gemini API key. This key will be stored securely in your browser's local storage.
</details>

---

## 🏗️ Architecture / How it Works

AttireSense employs a streamlined, client-side data flow designed for low latency and high reliability:

1.  **Profile Ingestion:** User preferences (gender, skin tone, environment, etc.) are captured via the onboarding UI and persisted in `LocalStorage`.
2.  **Prompt Assembly:** When a user requests an outfit, the app dynamically constructs a complex system prompt, injecting the user's stored profile attributes to contextualize the request.
3.  **AI Inference:** The client makes a direct, asynchronous REST call to the Google Gemini 2.0 Flash API, enforcing specific structural constraints on the output.
4.  **Parsing & Rendering:** The unstructured text response from Gemini is parsed using custom regex heuristics to extract distinct clothing items (Top, Bottom, Shoes, etc.) and seamlessly rendered into styled HTML components within the chat interface.

---

## 🧠 Technical Highlights & Learnings

*   **Structuring Unstructured AI Output:** A significant challenge was ensuring the AI consistently formatted its recommendations so they could be displayed as clean UI cards rather than a wall of text. **Solution:** I engineered a robust system prompt that forced the AI to use specific emoji markers (e.g., `👕 Top:`), combined with a custom Vanilla JS parser that gracefully degrades to standard markdown if the AI fails to follow the format.
*   **Zero-Dependency State Management:** To keep the application lightweight and performant, I opted against heavy frontend frameworks like React. **Solution:** I architected a modular, utility-driven Vanilla JS state management system utilizing `LocalStorage`, proving that complex, stateful applications can be built efficiently without a virtual DOM.
*   **Secure Client-Side API Handling:** While storing API keys client-side presents risks, I implemented a frictionless UX pattern where users supply their own key, abstracting the key management away from the source code and empowering the user with control over their API usage.

---

## 📬 Contact

**John Doe** *(Placeholder)*
*   **LinkedIn:** [linkedin.com/in/johndoe](#)
*   **Portfolio:** [johndoe.dev](#)
*   **Email:** [john.doe@example.com](mailto:john.doe@example.com)
