# 👔 AttireSense

> **Look Better, Effortlessly.** An AI-powered personal stylist that analyzes your unique physical attributes and environment to deliver highly personalized, color-matched outfit recommendations.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Gemini AI](https://img.shields.io/badge/Gemini_AI-8E75B2?style=for-the-badge&logo=googlebard&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

---

## 🎨 Visuals

![Demo](./assets/demo.gif)

---

## 🔗 Live Links

- **Live Deployment:** [AttireSense Demo](#) *(Replace with actual link)*
- **Documentation:** [Gemini API Docs](https://ai.google.dev/docs)

---

## ✨ Features

- **Hyper-Personalized Styling Engine:** Leverages a comprehensive 9-factor user profile (including skin tone, body shape, and climate) to contextualize AI prompt generation, resulting in mathematically appropriate color and fit suggestions.
- **Conversational AI Interface:** Features a real-time, responsive chat UI integrated with Google's Gemini 2.0 Flash API, allowing users to ask open-ended fashion questions and receive structured outfit cards.
- **Client-Side State Management:** Implements persistent user profiles and localized API key storage using HTML5 `localStorage`, ensuring data privacy and a frictionless return-user experience without requiring a backend database.
- **Responsive Glassmorphic UI:** Built entirely with vanilla HTML, CSS, and JavaScript. Features a modern, mobile-first design utilizing CSS Grid/Flexbox, custom animations, and glassmorphism techniques for a premium look and feel.
- **Dynamic Content Parsing:** Custom JavaScript parser transforms raw markdown responses from the LLM into structured, styled HTML outfit cards dynamically.

---

## 💻 Tech Stack

**Frontend:**
- HTML5 (Semantic Structure)
- CSS3 (Variables, Flexbox, Grid, Animations, Glassmorphism)
- Vanilla JavaScript (ES6+, DOM Manipulation, Asynchronous Fetch API)

**APIs Utilized:**
- Google Gemini 2.0 Flash API (via REST)

**Storage:**
- Browser `localStorage` (State management for profiles and API keys)

---

## 🚀 Installation & Setup

To run AttireSense locally, follow these steps. The project requires no build tools or package managers (no `npm` or `package.json` required)—just a local web server.

<details>
<summary><b>Click to expand setup instructions</b></summary>

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/attiresense.git
   cd attiresense
   ```

2. **Environment Configuration:**
   While the application uses `localStorage` for the API key rather than a Node backend, you will need a Gemini API key to use the chat functionality.
   - Get a free key at [Google AI Studio](https://aistudio.google.com/app/apikey).
   - In a production environment, this could be proxied through a backend. For local development, the app prompts you to securely enter your key via the UI (no `.env` file needed for the frontend alone, though a backend proxy would use `.env.example`).

3. **Run the local server:**
   Since this project serves static files, you can use any static server.

   Using Python:
   ```bash
   python3 -m http.server 3000
   ```
   Or using npx:
   ```bash
   npx serve .
   ```

4. **Access the application:**
   Open your browser and navigate to `http://localhost:3000`.

</details>

---

## 🏗 Architecture / How it Works

1. **Data Collection:** The user completes an onboarding flow that collects 9 distinct style factors (e.g., skin tone, body shape, occasion). This data is serialized and stored locally via the `app.js` utility.
2. **Contextual Prompt Engineering:** When the user initiates a chat, `chat.js` retrieves the profile data and constructs a highly specific "System Prompt" injecting the user's constraints. It strictly instructs the LLM to format the response using specific emoji markers.
3. **API Communication:** A RESTful `fetch` call is made to the Gemini 2.0 Flash API endpoint, passing the system instructions and the rolling chat history.
4. **Custom Parsing & Rendering:** Upon receiving the raw text response, a custom parsing algorithm (`renderAIMessage`) intercepts the text, identifies the requested emoji markers (e.g., 👕, 👖), and extracts the corresponding clothing items. It then dynamically builds and injects an HTML "Outfit Card" into the DOM for a polished presentation, falling back to a standard chat bubble for non-outfit queries.

---

## 🧠 Technical Highlights & Learnings

- **Prompt Engineering as Code:** One of the main challenges was ensuring the LLM consistently returned data in a format the UI could parse into cards. By developing a robust, multi-line system prompt that enforces strict formatting rules and injecting the user's profile state dynamically, I achieved a near 100% success rate in structured data retrieval without needing complex function calling.
- **Zero-Dependency Architecture:** Deliberately chose to build the application without React, Vue, or Tailwind. This constraint deepened my understanding of native DOM manipulation, custom CSS custom properties (variables) for theme management, and building robust, native JavaScript utility functions (like the custom Markdown-lite parser).
- **Graceful Error Handling & Fallbacks:** Built resilient parsing logic. If the AI fails to follow the structured format, the application gracefully degrades by passing the response through a custom `markdownLite` function, ensuring the user still receives a readable and styled message rather than a broken UI.

---

## 📬 Contact

- **LinkedIn:** [Your Name](https://linkedin.com/in/yourprofile)
- **Portfolio:** [yourportfolio.com](https://yourportfolio.com)
- **GitHub:** [yourusername](https://github.com/yourusername)
