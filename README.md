# AttireSense – Look Better, Effortlessly ✨

> An AI-powered personal stylist application that provides context-aware outfit recommendations based on body type, skin tone, occasion, and climate.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Vanilla JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Google Gemini API](https://img.shields.io/badge/Gemini_AI-4285F4?style=for-the-badge&logo=google&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)

## 📸 Visuals

![Demo](./assets/demo.gif)

## 🌐 Live Links

- **Live Deployment:** [Deploy Link Here]
- **Documentation:** [Docs Link Here]

## ✨ Features

- **Personalized Style Profiles:** Users build comprehensive profiles capturing their body shape, skin tone, height, and style preferences.
- **AI-Powered Recommendations:** Integrates directly with the Google Gemini 2.0 Flash REST API to analyze profiles and context (climate, environment, occasion) and recommend full outfits.
- **Color-Matched Aesthetics:** Emphasizes color science to ensure outfit recommendations complement the user's natural complexion.
- **Body-Type Aware:** Suggestions highlight styles that flatter the user's specific proportions.
- **Privacy-First Local Storage:** User profiles and API keys are stored exclusively in the browser's LocalStorage, ensuring sensitive data never leaves the client except when querying the AI.
- **Responsive UI/UX:** A clean, modern interface designed without external UI frameworks, featuring custom CSS animations, glassmorphism, and responsive grid layouts.

## 🛠️ Tech Stack

- **Frontend:** HTML5, CSS3 (Custom Properties, Flexbox, CSS Grid), Vanilla JavaScript (ES6+). No heavy frameworks.
- **AI Integration:** Google Gemini 2.0 Flash (via REST API).
- **State Management:** Browser LocalStorage.
- **Deployment:** [Deployment Platform Here]

<details>
<summary><h2>🚀 Installation & Setup</h2></summary>

This application is built with vanilla web technologies, requiring no complex build steps or dependencies.

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/attiresense.git
    cd attiresense
    ```

2.  **Acquire a Gemini API Key:**
    *   Visit [Google AI Studio](https://aistudio.google.com/app/apikey).
    *   Create a new API key.

3.  **Run Locally:**
    You can use any static server. For example, using `npx`:
    ```bash
    npx serve .
    ```

4.  **Set Environment Variables:**
    *   Create a `.env` file in the root directory by copying the `.env.example` file if one is provided.
    *   Open the application in your browser (typically `http://localhost:3000`).
    *   Click the "🔑 API Key" button in the navigation bar.
    *   Paste your Gemini API key. This key is stored securely in your browser's LocalStorage.

</details>

## 🏗️ Architecture / How it Works

AttireSense employs a lightweight, client-side architecture.

1.  **User Onboarding:** The user completes a multi-step form to define their style profile. This data is serialized and saved to LocalStorage.
2.  **State Hydration:** Upon loading the chat interface, the application hydrates state from LocalStorage to populate sidebar UI and construct the AI system prompt.
3.  **System Prompt Construction:** The `app.js` utility dynamically builds a robust system instruction for the Gemini API. It enforces a strict output format (using specific emoji markers) to ensure reliable parsing on the client side.
4.  **AI Interaction:** When a user submits a query, the application calls the Gemini 2.0 Flash REST API, passing the constructed system prompt and the chat history.
5.  **Response Parsing & Rendering:** The application parses the AI's response text. If the response matches the expected outfit format, it renders a structured HTML "outfit card." Otherwise, it falls back to a standard chat bubble.

## 💡 Technical Highlights & Learnings

- **Robust AI Prompt Engineering:** A significant challenge was ensuring the Gemini API consistently returned responses in a structured, easily parseable format without relying on heavier abstractions like function calling. I engineered a strict system prompt that mandated specific emoji prefixes for different clothing categories, allowing for reliable Regex-based parsing on the client.
- **Zero-Dependency Architecture:** Building the entire application without external frontend frameworks (like React or Vue) reinforced fundamental DOM manipulation, event delegation, and state management principles. It resulted in a highly performant application with an incredibly small footprint.
- **Custom CSS Architecture:** Designed a comprehensive, maintainable CSS structure using Custom Properties (CSS variables) for consistent theming and complex animations without relying on utility libraries like Tailwind.

## 📬 Contact

- **LinkedIn:** [Your LinkedIn URL]
- **Portfolio:** [Your Portfolio URL]
- **Email:** [Your Email Address]
