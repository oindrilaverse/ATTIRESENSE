<div align="center">

# ✨ AttireSense

**Look Better, Effortlessly.**

*An AI-powered personal stylist application that learns your unique body type, skin tone, and style preferences to provide the perfect outfit recommendations for any occasion.*

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)
![Tech Stack](https://img.shields.io/badge/tech-Vanilla_JS-yellow)
![API](https://img.shields.io/badge/API-Gemini_2.0_Flash-purple)

</div>

---

## 📸 Visuals

![Demo](./assets/demo.gif)

---

## 🔗 Live Links

- **Live Deployment:** [AttireSense Live App](https://example.com/attiresense) *(Placeholder)*
- **Documentation:** [Project Wiki](https://example.com/docs) *(Placeholder)*

---

## 🚀 Features

- **Personalized Style Profile:** An intuitive 9-factor onboarding flow that captures user gender, skin tone, height, body shape, age range, climate, environment, occasion, and style preferences.
- **Smart Color Matching:** Uses AI to recommend colors that complement the user's natural complexion.
- **Body-Type & Context Aware:** Suggests clothing that fits specific proportions and adapts to different climates and occasions.
- **Conversational AI Stylist:** A sleek chat interface powered by Google's Gemini 2.0 Flash API to ask specific styling questions.
- **Structured Outfit Cards:** Dynamically parses the AI's response to build rich, visually appealing outfit recommendation cards directly in the chat UI.
- **Privacy-First Local Storage:** All profile data and API keys are securely managed within the browser's LocalStorage, ensuring zero external database dependencies.

---

## 💻 Tech Stack

- **Frontend:** Vanilla JavaScript (ES6+), HTML5, CSS3 (No frameworks, pure native performance).
- **Backend / AI Integration:** Google Gemini 2.0 Flash REST API.
- **State Management:** Browser LocalStorage API.
- **Architecture:** Client-side only static application (SPA).

---

## 🛠 Installation & Setup

<details>
<summary>Click to expand setup instructions</summary>

### Prerequisites
- Node.js (for running a local static server)
- A Gemini API Key from [Google AI Studio](https://aistudio.google.com/app/apikey)

### Step-by-Step Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/attiresense.git
   cd attiresense
   ```

2. **Environment Variables:**
   While the application prompts the user for their API key via the UI (stored securely in `localStorage`), you can refer to the `.env.example` file to understand the configuration structure if you decide to build a backend proxy later.

3. **Run locally:**
   Since this is a vanilla JS application with no build step, you can serve it using any static server.
   ```bash
   npx serve .
   ```
   *Alternatively, you can just open `index.html` in your browser.*

4. **Start Chatting:**
   Navigate to `http://localhost:3000` (or whatever port `serve` provides), enter your Gemini API key in the UI when prompted, and start chatting with your new AI stylist!

</details>

---

## 🏗 Architecture / How it Works

AttireSense relies on a seamless client-side architecture:
1. **Data Collection:** The user completes the onboarding flow. The `saveProfile()` function in `app.js` serializes this data and stores it in the browser's `localStorage`.
2. **Contextual Prompting:** When the user enters a message in the chat, `buildSystemPrompt()` aggregates the 9 profile factors and generates a highly specific system instruction, ensuring the AI strictly formats its response with specific emojis (👕, 👖, 👟, ⌚).
3. **API Communication:** The `chat.js` module sends an asynchronous `POST` request directly to the Gemini 2.0 Flash REST API endpoints, appending the generated system prompt and conversation history.
4. **Parsing & Rendering:** The application receives the markdown response. The `renderAIMessage()` function uses regular expressions to detect outfit sections, parsing the raw text into structured HTML to display beautiful outfit recommendation cards.

---

## 🧠 Technical Highlights & Learnings

- **Vanilla JS Architecture Over Frameworks:** Decided to build the entire application using Vanilla JS, HTML, and CSS. *Challenge:* Managing state and DOM updates without React/Vue. *Solution:* Implemented custom state management via LocalStorage and targeted DOM manipulation functions, proving that highly interactive apps can be built without heavy JavaScript bundles.
- **Structured AI Responses Without JSON:** *Challenge:* Coaxing the LLM into returning a strictly structured response without relying on rigid JSON schemas which often break or hallucinate. *Solution:* Engineered a robust system prompt requiring specific emojis as line markers. I then wrote a custom parser (`renderAIMessage`) using Regex to split the text block and dynamically generate HTML layout cards. This approach provided flexibility while maintaining a rigid UI structure.
- **Client-Side API Security:** *Challenge:* Integrating an API key without exposing it in a public repository. *Solution:* Built a secure, localized setup flow where the user inputs their key directly into the app. It's stored strictly in LocalStorage, prioritizing user security and zero backend dependency.

---

## 📬 Contact

- **LinkedIn:** [linkedin.com/in/yourprofile](https://linkedin.com/in/yourprofile)
- **Portfolio:** [yourportfolio.com](https://yourportfolio.com)
- **GitHub:** [@yourusername](https://github.com/yourusername)
