# AttireSense ✨
> Look Better, Effortlessly

**AttireSense** is an AI-powered personal stylist web application that learns a user's body type, skin tone, and style preferences to provide highly personalized outfit recommendations for any occasion.

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)](#)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Tech Stack: Vanilla JS](https://img.shields.io/badge/Tech_Stack-Vanilla_JS-f7df1e.svg)](#)
[![AI: Gemini 2.0 Flash](https://img.shields.io/badge/AI-Gemini_2.0_Flash-8e44ad.svg)](#)

---

## 📸 Visuals

![Demo](./assets/demo.gif)

---

## 🔗 Live Links

- **Live Deployment:** [attiresense-demo.com](#) *(Placeholder Link)*
- **Documentation:** [Wiki / Docs](#) *(Placeholder Link)*

---

## ✨ Features

- **Personalized Onboarding Flow:** A dynamic, multi-step onboarding process captures key user details (gender, skin tone, height, body shape, age, climate, environment, occasion, and style) with local persistence.
- **AI Stylist Chat:** Integrates directly with Google's Gemini 2.0 Flash via REST API to process user context and deliver tailored, reasoned outfit recommendations.
- **Smart Response Parsing:** Client-side parsing engine converts raw unstructured LLM markdown into structured UI "Outfit Cards" using emoji-based section anchors.
- **Client-Side State Management:** Leverages browser LocalStorage for a zero-backend architecture, persisting user profiles, chat history (stateless between sessions), and securely storing API keys.
- **Responsive & Modern UI:** Fully custom CSS styling featuring a glassmorphism aesthetic, smooth CSS animations, and a mobile-first responsive grid system without the bloat of a UI framework.
- **Starter Prompts & Follow-ups:** Context-aware suggestion chips to streamline user interaction.

---

## 🛠 Tech Stack

**Frontend Architecture:**
- **HTML5:** Semantic document structure.
- **CSS3:** Custom styling, CSS variables for theming, Flexbox/Grid layouts, custom keyframe animations.
- **Vanilla JavaScript (ES6+):** Core logic, DOM manipulation, state management.

**Backend / AI Integration:**
- **Zero-Backend:** Pure client-side application.
- **Google Gemini 2.0 Flash API:** RESTful integration for natural language processing and generative styling recommendations.

**Storage & State:**
- **LocalStorage:** Persistent storage for user profiles and API credentials.

---

## 🚀 Installation & Setup

<details>
<summary><strong>Click here to view detailed setup instructions</strong></summary>

### Prerequisites
- Node.js (for running a local static server) or any modern web server (e.g., Live Server extension in VSCode).
- A valid Google Gemini API Key.

### Step-by-Step Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/attiresense.git
   cd attiresense
   ```

2. **Serve the application locally:**
   Since this is a vanilla HTML/JS/CSS application without build steps, you just need a static file server. You can use `serve`:
   ```bash
   npx serve .
   ```
   Or Python's built-in HTTP server:
   ```bash
   python -m http.server 8000
   ```

3. **Access the application:**
   Open your browser and navigate to `http://localhost:3000` (or the port specified by your server).

4. **Configure the API Key:**
   - Click the "🔑 API Key" button in the navigation bar.
   - Enter your Google Gemini API Key. The key is securely stored in your browser's LocalStorage and is never transmitted anywhere except directly to Google's API endpoints.

</details>

---

## 🏗 Architecture / How it Works

AttireSense operates as a pure client-side Single Page Application (SPA) architecture, utilizing a multi-page setup (`index.html`, `onboarding.html`, `chat.html`) linked together through shared JavaScript utilities.

1. **State Initialization (`app.js`):** Upon loading, the app reads the user's styling profile and API key from LocalStorage.
2. **Prompt Engineering (`chat.js`):** When a user asks for an outfit, the system concatenates their stored profile constraints with strict formatting instructions (demanding specific emoji headers) to guide the LLM.
3. **API Interaction:** A `fetch` request is made directly to the Gemini REST API endpoint, passing the engineered system instruction and the conversational history.
4. **Response Parsing (`app.js`):** The raw text returned by Gemini is intercepted. A custom parsing function scans for expected emoji markers (e.g., `👕 Top:`, `👖 Bottom:`) and extracts the corresponding values, dynamically building an interactive DOM "Outfit Card" instead of rendering plain markdown.

---

## 💡 Technical Highlights & Learnings

- **Structured Output from Unstructured AI:** One of the main challenges was forcing the LLM to return data that could be confidently rendered into a specific UI component. I overcame this by writing a robust prompt that mandates the use of specific emoji-based section headers, combined with a custom JavaScript parser that falls back gracefully to standard markdown if the LLM deviates from the requested format.
- **Zero-Backend Architecture & State Management:** Building a complex, multi-step application without a backend or a framework like React required careful organization of global state. I implemented a lightweight wrapper around LocalStorage (`app.js`) to ensure the user profile is synchronized across different pages seamlessly.
- **Security & Direct API Access:** Connecting directly to the Gemini API from the client side poses security risks regarding API key exposure. To mitigate this, the application requires the user to input their own key, which is stored purely in LocalStorage. This demonstrates an understanding of client-side security boundaries while maintaining a serverless architecture.
- **Vanilla DOM Manipulation Performance:** Writing complex DOM updates manually highlighted the importance of efficient DOM querying, event delegation (used in the onboarding flow), and minimizing reflows to ensure the UI remains snappy and responsive.

---

## 📬 Contact

**[Your Name]**
- **LinkedIn:** [linkedin.com/in/yourprofile](#) *(Placeholder)*
- **Portfolio:** [yourportfolio.com](#) *(Placeholder)*
- **GitHub:** [github.com/yourusername](#) *(Placeholder)*
