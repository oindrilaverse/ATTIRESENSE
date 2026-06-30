<div align="center">

# ✨ AttireSense

**Look Better, Effortlessly.** An AI-powered personal stylist that curates tailored outfit recommendations based on your unique body type, complexion, and lifestyle.

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Google Gemini API](https://img.shields.io/badge/Google%20Gemini%20API-8E75B2?style=for-the-badge&logo=google&logoColor=white)](https://aistudio.google.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

</div>

---

## 📸 Visuals

![Demo](./assets/demo.gif)

---

## 🚀 Live Links

- **Live Deployment:** [View AttireSense Live (Placeholder)](https://your-deployment-link.com)
- **Documentation:** [Read the Docs (Placeholder)](https://your-docs-link.com)

---

## 🌟 Features

AttireSense focuses heavily on delivering a fast, responsive, and seamless user experience without the overhead of heavy frameworks.

- **Smart Fashion Profiling:** Quickly capture user preferences (9 factors including body shape, climate, style preference) and securely persist them via browser LocalStorage.
- **Context-Aware AI Styling:** Generates deeply personalized outfit recommendations by intelligently constructing system prompts based on the user's stored profile, feeding them to the Google Gemini API.
- **Dynamic UI Generation & Parsing:** Employs a custom parsing engine that interprets unstructured AI text responses into beautifully styled, structured outfit HTML cards.
- **Privacy-First Architecture:** Ensures API keys and personal data are stored entirely client-side using `localStorage`, reducing server dependency and enhancing data privacy.
- **Responsive & Accessible Design:** Built from the ground up with semantic HTML5 and vanilla CSS3 to provide a smooth, app-like experience across all device sizes.

---

## 💻 Tech Stack

- **Frontend:** HTML5, CSS3, Vanilla JavaScript (ES6+)
- **Backend/APIs:** Google Gemini 2.0 Flash API (via REST)
- **Data Persistence:** Browser LocalStorage (Client-side state management)
- **Tooling:** Prettier, ESLint (Optional depending on setup)

---

## 🛠 Installation & Setup

<details>
<summary><strong>Click to expand step-by-step setup instructions</strong></summary>
<br>

To run this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/attiresense.git
   cd attiresense
   ```

2. **Environment Configuration (Concept):**
   While this app allows users to input their API keys directly into the UI (which are then securely saved in `localStorage`), standard practice for larger apps would use environment variables. You can view `.env.example` (if applicable) for the structure, but you will just need to obtain a [Google Gemini API Key](https://aistudio.google.com/app/apikey).

3. **Run the application:**
   Since this project uses vanilla web technologies without a build step, you simply need to serve the files using any static file server.

   Using Python:
   ```bash
   python3 -m http.server 3000
   ```
   *Or using Node (npx):*
   ```bash
   npx serve . -p 3000
   ```

4. **Access the application:**
   Open your browser and navigate to `http://localhost:3000`.

</details>

---

## 🏗 Architecture / How it Works

AttireSense operates through a streamlined client-side architecture optimized for speed and simplicity:

1. **State Initialization:** Upon opening, the app retrieves the user's profile and Gemini API key from `localStorage`.
2. **Prompt Engineering:** The JavaScript application acts as a middleware, dynamically constructing an optimized system prompt that instructs Gemini to format responses in a specific way based on the user's attributes (e.g., skin tone, body shape, occasion).
3. **Data Fetching:** The user submits a natural language request, which is appended to the system prompt and dispatched to the Gemini API via a secure REST call.
4. **Parsing & Rendering:** A custom regex-based parser in `app.js` intercepts the AI's plain-text response, extracts specific outfit components (Top, Bottom, Shoes, Accessories, and "Why it works"), and injects them into the DOM as structured UI cards, safely escaping text to prevent XSS vulnerabilities.

---

## 🧠 Technical Highlights & Learnings

Developing AttireSense provided significant opportunities to demonstrate strong software engineering fundamentals:

- **Challenge: Parsing Unstructured AI Output:**
  * **Context:** LLMs naturally generate diverse text formats. It is difficult to reliably construct a UI card if the response format fluctuates.
  * **Solution:** I engineered the system prompt to enforce strict constraints (e.g., using exact emoji markers). I then developed a robust, regex-driven parser (`renderAIMessage` in `app.js`) to parse the text line-by-line, detect the markers, extract the content, and fall back to a gracefully styled chat bubble if the model failed to follow the rigid structure.

- **Challenge: State Management Without a Framework:**
  * **Context:** Modern frontend frameworks simplify state management. Doing it in vanilla JS risks creating disorganized code and DOM manipulation spaghetti.
  * **Solution:** I abstracted state logic into modular, single-responsibility utility functions (`getProfile`, `saveProfile`, `buildSystemPrompt`) and utilized browser `localStorage`. This kept the DOM manipulation layer strictly decoupled from the state logic, resulting in cleaner, more maintainable code.

- **Challenge: Security and XSS Prevention:**
  * **Context:** Rendering user-generated and AI-generated text directly into the DOM using `innerHTML` introduces serious Cross-Site Scripting (XSS) risks.
  * **Solution:** I implemented a custom `escSafe` utility function to aggressively sanitize all AI outputs, escaping dangerous characters (`<`, `>`, `&`, `"`) before injecting them into the DOM, ensuring robust security against injection attacks.

---

## 📫 Contact

- **LinkedIn:** [Your LinkedIn Profile](https://linkedin.com/in/yourprofile)
- **Portfolio:** [Your Portfolio Website](https://yourportfolio.com)
- **Email:** your.email@example.com
