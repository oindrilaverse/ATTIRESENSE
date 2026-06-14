# AttireSense ✨

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-yellow)
![Gemini API](https://img.shields.io/badge/AI-Google_Gemini-blueviolet)

> **Look better, effortlessly.** AttireSense is an AI-powered personal stylist application that analyzes your body type, skin tone, and environment to provide highly personalized outfit recommendations in real-time.

---

## Visuals

<div align="center">
  <img src="./assets/demo.gif" alt="Demo" width="800"/>
</div>

---

## Live Links

**[🌐 Live Deployment](#)** | **[📚 Documentation](#)**

---

## Features

- **Smart Outfit Recommendations:** Integrates with the Google Gemini 2.0 Flash API to generate dynamic, personalized clothing suggestions.
- **Comprehensive Style Profiling:** Analyzes 9 unique factors—including skin tone, body shape, climate, and occasion—to curate the perfect look for any user.
- **Interactive Chat Interface:** Allows users to ask natural, conversational questions (e.g., "What should I wear for a job interview?") and receive beautifully formatted outfit cards.
- **Local State Management:** Utilizes browser LocalStorage for secure, local retention of user profiles and API credentials, ensuring privacy without the need for a heavy backend database.
- **Responsive & Modern UI:** A fully responsive, glassmorphism-inspired interface built entirely with custom CSS.

---

## Tech Stack

- **Frontend:** HTML5, CSS3, Vanilla JavaScript (ES6+)
- **AI & APIs:** Google Gemini 2.0 Flash API (REST)
- **State Management:** Browser LocalStorage
- **Deployment:** Vercel / Netlify *(Placeholder)*

---

## Installation & Setup

<details>
<summary><strong>Show step-by-step instructions</strong></summary>

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/attiresense.git
   cd attiresense
   ```

2. **Obtain an API Key:**
   - Get a free API key from [Google AI Studio](https://aistudio.google.com/app/apikey).
   - *(Note: A `.env.example` file is provided for reference, but the application allows users to securely input and store their API key directly in the browser via the UI.)*

3. **Run the application locally:**
   Since this is a vanilla web application without a build step, you can serve it directly using any static file server.
   ```bash
   npx serve .
   ```
   Alternatively, you can simply open `index.html` in your preferred browser.

4. **Start Chatting:**
   Navigate to `http://localhost:3000` (or your chosen port), build your profile, configure your API key through the settings modal, and start receiving outfit recommendations.

</details>

---

## Architecture / How it Works

1. **Profile Generation:** When a user completes the onboarding flow, their stylistic preferences (gender, body shape, climate, etc.) are captured and stored in LocalStorage.
2. **Prompt Engineering:** When the user interacts with the AI stylist, the application dynamically constructs a rich system prompt. This prompt combines the user's localized profile data with strict formatting instructions.
3. **API Integration:** The frontend sends a REST API request to the Google Gemini API using the dynamically generated prompt and the chat history.
4. **Data Parsing & Rendering:** The application receives the AI's response, parsing specific emoji-based structural markers to convert raw text into polished, interactive outfit cards (Top, Bottom, Shoes, Accessories, and "Why this works").

---

## Technical Highlights & Learnings

- **Structured Parsing from LLMs:** One of the main challenges was reliably rendering UI components from an unstructured LLM response. I overcame this by designing a strict prompting strategy that forces the Gemini API to output text with specific emoji markers. The client-side JavaScript then uses regular expressions to parse these markers and render visually appealing outfit cards.
- **Zero-Dependency Architecture:** Built a performant, interactive, and responsive single-page application using only Vanilla HTML, CSS, and JS. This required building custom state management and routing logic, demonstrating a deep understanding of core web technologies without relying on heavy frameworks like React or Vue.
- **Client-Side Security & Privacy:** Designed the application to prioritize user privacy by keeping all profile data and API keys strictly within the browser's LocalStorage. This eliminates the need for user authentication and backend storage, drastically simplifying the architecture while keeping user data safe.

---

## Contact

**Your Name**
- [LinkedIn Profile](#)
- [Personal Portfolio](#)
- [Email Me](mailto:your.email@example.com)
