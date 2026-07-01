# AttireSense ✨

> **Look Better, Effortlessly.**
> Your AI-powered personal stylist that learns your unique body type, skin tone, and style preferences to provide personalized, context-aware outfit recommendations.

![Build Status](https://img.shields.io/badge/build-passing-brightgreen?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-blue?style=flat-square)
![Tech Stack](https://img.shields.io/badge/tech-Vanilla%20JS%20%7C%20HTML5%20%7C%20CSS3-orange?style=flat-square)
![Powered By](https://img.shields.io/badge/AI-Google%20Gemini-purple?style=flat-square)

---

## 🎨 Visuals

![Demo](./assets/demo.gif)

---

## 🔗 Live Links

- **Live Deployment:** [AttireSense Demo](#) *(Replace with actual link if deployed)*
- **Documentation:** [Wiki / Docs](#) *(Replace with actual link if available)*

---

## 🌟 Features

AttireSense provides a frictionless, intelligent styling experience focused on real-world utility and user confidence:

- **Intelligent Profiling:** A streamlined onboarding flow to capture 9 key style factors (body shape, skin tone, climate, occasion, etc.) in under 2 minutes.
- **Color-Matched Styling:** Leverages AI to suggest palettes that complement the user's natural skin tone and features.
- **Body-Type & Climate Awareness:** Recommendations adapt dynamically to the user's proportions, the local weather, and the specific environment (e.g., office vs. date night).
- **Conversational AI Stylist:** Natural language chat interface powered by Google Gemini, allowing users to ask context-specific questions (e.g., "What should I wear for a rainy job interview?").
- **Structured Outfit Cards:** Custom parsers transform raw AI text into clean, accessible, and structured UI components (Outfit Cards).
- **Zero-Backend Architecture:** Fully client-side application utilizing local storage for state management and direct REST API calls to the LLM, ensuring privacy and speed.

---

## 🛠️ Tech Stack

**Frontend:**
- HTML5 (Semantic Structure)
- CSS3 (Custom Design System, Glassmorphism UI, CSS Variables, Responsive Grid/Flexbox)
- Vanilla JavaScript (ES6+, DOM Manipulation, LocalStorage Management)

**Backend / AI Services:**
- Google Gemini 2.0 Flash API (via REST)

**Data Storage & State Management:**
- Browser `localStorage` (Profile Preferences, API Keys)

**Deployment:**
- *(e.g., Vercel / Netlify / GitHub Pages)*

---

## 🚀 Installation & Setup

<details>
<summary>Click to expand setup instructions</summary>

Follow these steps to run AttireSense locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/attiresense.git
   cd attiresense
   ```

2. **Environment Variables:**
   You will need a Google Gemini API key.
   Create a `.env` file based on the example (or set it up directly in the UI if the app supports it):
   ```bash
   cp .env.example .env
   ```
   *Note: Since this is a client-side app, the API key is currently entered by the user via the UI and stored in `localStorage`. Ensure you never commit your API keys.*

3. **Run a Local Server:**
   Since the project uses Vanilla JS without a build step, you just need a simple static file server.

   Using Python:
   ```bash
   python3 -m http.server 3000
   ```

   Using Node/npx:
   ```bash
   npx serve .
   ```

4. **Open the Application:**
   Navigate to `http://localhost:3000` (or the port specified by your server) in your browser.

</details>

---

## 🧠 Architecture / How it Works

AttireSense operates entirely on the client side, ensuring a fast and private user experience:

1. **State Management:** User preferences and the Gemini API key are captured during onboarding and securely saved to the browser's `localStorage` via utility functions in `app.js`.
2. **Context Injection:** When the user interacts with the chat, the application constructs a robust system prompt combining the stored profile data (gender, skin tone, climate, etc.) and explicit formatting instructions.
3. **AI Inference:** The app makes direct REST calls to the Google Gemini 2.0 Flash API using the `fetch` API, passing the heavily contextualized prompt.
4. **Data Parsing & Rendering:** Instead of displaying raw markdown, a custom parsing engine (`renderAIMessage`) intercepts the LLM's response, extracting specific emojis and sections to dynamically build rich HTML "Outfit Cards".

---

## 💡 Technical Highlights & Learnings

- **Prompt Engineering for Structured Output:** One of the main challenges was forcing a conversational LLM (Gemini) to consistently output data that a frontend UI could parse. This was solved by creating a strict system prompt (`buildSystemPrompt`) that mandates the use of specific emojis (👕, 👖, 👟) as delimiters, allowing the vanilla JS regex parser to reliably build visual cards.
- **State Management without Frameworks:** Designing a robust way to manage global state (user profile, API keys) across multiple HTML pages without React or Redux. Implemented a centralized `app.js` module acting as the source of truth leveraging `localStorage`.
- **Custom Design System:** Built a fully custom, responsive design system from scratch using CSS Custom Properties (Variables), implementing complex glassmorphism effects and modern CSS animations without relying on UI libraries like Bootstrap or Tailwind.
- **Sanitization & Security:** Implemented a lightweight HTML escaping function (`escSafe`) to prevent XSS attacks when rendering dynamically generated AI content into the DOM.

---

## 📬 Contact

Let's connect! I'm open to discussing software engineering roles and exciting projects.

- **LinkedIn:** [Your LinkedIn Profile](https://linkedin.com/in/yourprofile)
- **Portfolio:** [Your Portfolio Website](https://yourportfolio.com)
- **Email:** your.email@example.com

---
*If you liked this project, please consider giving it a ⭐!*
