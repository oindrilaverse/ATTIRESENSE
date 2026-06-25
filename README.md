# AttireSense ✨

> Look Better, Effortlessly. An AI-powered fashion assistant that provides personalized outfit recommendations based on your style, body type, and occasion.

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)
![Tech Stack](https://img.shields.io/badge/Tech-Vanilla_JS_|_HTML5_|_CSS3-lightgrey)

---

## 📸 Visuals

![Demo](./assets/demo.gif)
*(Placeholder for actual application demo GIF)*

---

## 🌐 Live Links

- **Live Deployment:** [attiresense.app (Placeholder)](#)
- **Documentation:** [Wiki / Docs (Placeholder)](#)

---

## ✨ Features

- **Color-Matched Outfits:** AI analyzes user skin tone to recommend complimentary colors, eliminating guesswork.
- **Body-Type Aware:** Tailored styling tips and clothing recommendations mapped to individual proportions and build.
- **Occasion & Climate Smart:** Context-aware generation adapting suggestions for specific events and local weather conditions.
- **AI Stylist Chat:** Interactive, conversational interface powered by Gemini 2.0 Flash for instant, detailed styling advice.
- **Seamless UX:** A clean, responsive design prioritizing intuitive navigation and rapid onboarding.

---

## 🛠️ Tech Stack

### Frontend
- **Languages:** Vanilla JavaScript (ES6+), HTML5, CSS3
- **Architecture:** Component-based UI patterns without heavy frameworks, emphasizing lightweight performance and fast load times.

### Backend & APIs
- **AI Engine:** Google Gemini 2.0 Flash API accessed via REST
- **Integration:** Custom client-side prompt engineering and response parsing to structure AI output into UI components.

### Storage & State Management
- **Local Data:** Browser `LocalStorage` for persisting user profiles, preferences, and API keys securely on the client side.

---

## 🚀 Installation & Setup

<details>
<summary>Click to expand setup instructions</summary>

### Prerequisites
- Node.js installed locally (for the static server)
- A Google Gemini API Key

### Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/attiresense.git
   cd attiresense
   ```

2. **Environment Setup:**
   *Note: Since this is a client-side app, API keys are managed in the browser, but you can review `.env.example` if applicable for future backend integration.*

3. **Run locally:**
   Serve the application using a static server:
   ```bash
   npx serve .
   ```
   Alternatively, you can open `index.html` directly in your browser or use an extension like VS Code Live Server.

4. **Add API Key:**
   - Open the application in your browser.
   - Navigate to the settings or chat interface and input your Gemini API Key when prompted.

</details>

---

## 🏗️ Architecture / How It Works

The core logic of AttireSense is designed for speed, privacy, and seamless AI integration directly within the client:

1. **Profile Creation:** Users complete a rapid onboarding flow (9 key data points).
2. **State Management:** This profile data is stored securely in the browser's `LocalStorage`.
3. **Prompt Engineering:** When a user requests an outfit, the app dynamically constructs a highly specific system prompt combining the user's profile with strict formatting instructions.
4. **AI Generation:** The app makes a REST call to the Google Gemini API.
5. **Data Parsing:** The raw text response from Gemini is intercepted by custom parsing logic (`renderAIMessage`) which extracts structured data (Top, Bottom, Shoes, Accessories, reasoning).
6. **UI Rendering:** The extracted data is dynamically injected into styled DOM elements (Outfit Cards) for a polished presentation.

---

## 💡 Technical Highlights & Learnings

Developing AttireSense involved solving several interesting engineering challenges:

- **Structured Output from Unstructured AI:** LLMs naturally output conversational text. A significant challenge was forcing the AI to adhere to a specific format and writing a robust regex-based parser (`renderAIMessage` in `attiresense.js`) to extract distinct clothing items and render them into structured HTML cards, gracefully falling back to markdown if the AI deviated.
- **Framework-less State Management:** Opting out of React/Vue meant implementing custom state management. I built a lightweight utility to sync the user profile across multiple pages (`index.html`, `onboarding.html`, `chat.html`) using `LocalStorage`, ensuring a snappy, consistent experience without complex boilerplate.
- **Client-Side Security Considerations:** While storing an API key in `LocalStorage` is a known risk for production applications, it was a deliberate architectural choice for this iteration to keep the app 100% serverless and instantly deployable. Future iterations would move API communication to a secure backend proxy.

---

## 📬 Contact

- **LinkedIn:** [linkedin.com/in/yourprofile](#)
- **Portfolio:** [yourportfolio.com](#)
- **Email:** hello@yourdomain.com

---
*If you are a hiring manager or recruiter, I'd love to discuss how my approach to problem-solving and clean code can bring value to your team.*
