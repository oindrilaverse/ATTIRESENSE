# AttireSense ✨

**Look Better, Effortlessly.**
An AI-powered personal stylist application that delivers personalized outfit recommendations tailored to your unique style, body type, and occasion.

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)
![Tech Stack: Vanilla JS](https://img.shields.io/badge/Tech-Vanilla_JS-yellow)
![AI: Gemini 2.0](https://img.shields.io/badge/AI-Google_Gemini-orange)

<div align="center">
  ![Demo](./assets/demo.gif)
</div>

## 🔗 Live Links

*   **Live Deployment:** [View AttireSense Live (Placeholder Link)](#)
*   **Documentation:** [See Technical Wiki (Placeholder Link)](#)

---

## 🎯 Features

AttireSense provides a seamless, intuitive experience, hiding complex AI prompt engineering behind a beautifully crafted user interface.

*   **Context-Aware AI Styling:** Generates complete outfit recommendations based on 9 core profile factors (e.g., skin tone, body shape, climate, occasion).
*   **Zero-Latency State Management:** Implements ultra-fast, local-first state handling using browser `LocalStorage`, ensuring user preferences persist without heavy backend dependencies.
*   **Dynamic Response Parsing:** Intelligently parses raw Markdown from the AI model into structured, highly visual HTML "Outfit Cards" with fallback rendering for conversational text.
*   **Responsive, Framework-less UI:** Built entirely from scratch using Vanilla JavaScript, HTML5, and CSS3, demonstrating strong fundamentals in DOM manipulation, CSS Grid/Flexbox, and event handling without relying on libraries like React or Vue.
*   **Secure API Handling:** Integrates a secure, client-side configuration for API keys, educating users on acquiring keys while keeping their data completely localized.

## 🛠 Tech Stack

**Frontend**
*   **HTML5 / CSS3:** Semantic markup, custom CSS variables, CSS grid/flexbox layouts, responsive design, and CSS animations.
*   **Vanilla JavaScript (ES6+):** Modular design, DOM manipulation, asynchronous fetching, regex-based text parsing.

**APIs & Data**
*   **Google Gemini 2.0 Flash API:** Integrated via REST for rapid, intelligent generative text.
*   **LocalStorage API:** For persisting user state, configurations, and session data.

**Deployment & Tools**
*   **Static Hosting:** Designed to be easily deployed on Vercel, Netlify, or GitHub Pages.

---

## 🚀 Installation & Setup

<details>
<summary><strong>Click here to view setup instructions</strong></summary>

### Prerequisites
*   Node.js (for running a local static server)
*   A free Google Gemini API Key (get one at [Google AI Studio](https://aistudio.google.com/app/apikey))

### Steps

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/attiresense.git
    cd attiresense
    ```

2.  **Environment Variables:**
    *   *Note: Since this is a serverless frontend application, API keys are input directly via the UI and stored in your browser's LocalStorage. There is no need for a `.env` file in the root directory.*
    *   *(Optional)* Refer to `.env.example` if extending the project with a backend node server.

3.  **Run Locally:**
    The project does not require a complex build step (no `package.json`). Simply serve the static files:
    ```bash
    npx serve .
    ```
    *Alternatively, you can use `python -m http.server 3000` or the VS Code Live Server extension.*

4.  **Access the App:**
    Open `http://localhost:3000` in your browser. When prompted in the UI, enter your Gemini API key.

</details>

---

## 🏗 Architecture / How it Works

AttireSense utilizes a **Local-First, Serverless Architecture**.

1.  **Onboarding & State:** Users complete an onboarding flow. Their choices (height, climate, style, etc.) are immediately serialized and saved to browser `LocalStorage`.
2.  **Context Assembly:** When a user asks for fashion advice, the JavaScript engine retrieves the profile data and constructs a highly specific, hidden system prompt. This guarantees the AI understands the user's constraints and formats the response predictably using designated emojis.
3.  **AI Invocation:** The app makes an asynchronous REST API call (`fetch`) directly to the Google Gemini 2.0 Flash endpoint.
4.  **Data Parsing & Rendering:** The response string is passed through a custom regex-driven parser. If it detects the required structural markers (e.g., 👕, 👖), it extracts the values and dynamically injects them into custom HTML UI cards. Otherwise, it safely renders the text as a chat bubble using a lightweight markdown-to-HTML converter.

---

## 💡 Technical Highlights & Learnings

*   **Challenge: Unpredictable AI Outputs.**
    *   *Solution:* LLMs can return inconsistently formatted text. To ensure a polished UI, I developed a strict system prompt instructing Gemini to use specific emojis as section headers. I then wrote a custom parsing algorithm (`renderAIMessage`) using Regular Expressions to identify these markers, extract the content, and inject it into structured HTML cards.
*   **Challenge: Framework Independence.**
    *   *Solution:* Building a complex onboarding flow and chat interface without React/Vue required meticulous state management and DOM manipulation. I successfully implemented view transitions, state synchronization, and reactive UI updates purely with Vanilla JS, showcasing a deep understanding of core web technologies.
*   **Challenge: Secure API Key Management on the Client.**
    *   *Solution:* To keep the app static and serverless while preventing API key exposure in the repository, I built an in-app secure modal that allows users to input their own keys. These are stored securely in `LocalStorage`, emphasizing user privacy and security best practices.

---

## 📬 Contact

I'm always open to discussing technical challenges, software architecture, and new opportunities.

*   **LinkedIn:** [linkedin.com/in/yourprofile](#)
*   **Portfolio:** [yourportfolio.com](#)
*   **GitHub:** [github.com/yourusername](#)
