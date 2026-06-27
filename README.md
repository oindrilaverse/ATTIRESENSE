<div align="center">

# ✨ AttireSense

**Look Better, Effortlessly.**
*An AI-powered personal stylist that curates tailored outfit recommendations based on your unique body type, style preferences, and lifestyle context.*

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](#)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Tech Stack](https://img.shields.io/badge/Tech_Stack-Vanilla_JS_|_HTML_|_CSS-orange)](#)
[![AI Integration](https://img.shields.io/badge/AI-Gemini_2.0_Flash-purple)](#)

</div>

---

## 🎨 Visual Demonstration

![Demo](./assets/demo.gif)
*(A visual walk-through of the style profiling and AI recommendation process)*

---

## 🚀 Live Links

- **Live Deployment:** [AttireSense App](#) *(Placeholder Link)*
- **Documentation:** [Wiki / Docs](#) *(Placeholder Link)*

---

## ✨ Features

- **Hyper-Personalized Styling:** Analyzes user profiles (skin tone, body shape, height) to recommend flattering, color-matched outfits.
- **Context-Aware Recommendations:** Adjusts clothing suggestions based on the user's specific occasion (e.g., job interview vs. casual weekend) and local climate.
- **Conversational AI Interface:** Leverages Google Gemini 2.0 Flash to act as an engaging, interactive personal stylist.
- **Privacy-First Data Handling:** User profiles and API keys are stored entirely client-side using browser LocalStorage, ensuring fast access without backend data risks.
- **Frictionless Onboarding:** A streamlined, 2-minute profile-building flow designed for optimal user experience and high conversion rates.

---

## 🛠 Tech Stack

**Frontend Architecture (Zero Frameworks)**
- **Language:** Vanilla JavaScript (ES6+), HTML5, CSS3
- **Styling:** Custom CSS implementing a modern, glass-morphism design system with custom CSS properties/variables for easy theming.
- **State Management:** Browser `LocalStorage` for persisting user state, preferences, and authentication keys locally.

**AI / Backend Integration**
- **LLM Provider:** Google Gemini 2.0 Flash API (via REST).
- **Prompt Engineering:** Complex, structured system prompts enforcing deterministic, easily parsable JSON-like outputs from the model.

**Deployment & DevOps**
- **Server:** Static file serving (e.g., `npx serve`, Vercel, Netlify).

---

## ⚙️ Installation & Setup

<details>
<summary><b>Click to expand setup instructions</b></summary>

Follow these steps to run AttireSense locally:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/attiresense.git
   cd attiresense
   ```

2. **Environment Variables:**
   Since this is a client-side application, API keys are input directly into the app UI. However, for development testing, you can review the structure in the `.env.example` file (if applicable) or understand that the app expects a valid Google Gemini API key during the onboarding flow.

3. **Run Locally:**
   The project requires no build tools like Webpack or Vite. Simply serve the directory statically:
   ```bash
   # Using npx (Node.js)
   npx serve .

   # Or using Python 3
   python -m http.server 8000
   ```

4. **Access the App:**
   Open your browser and navigate to `http://localhost:3000` (or the port specified by your server).
</details>

---

## 🏗 Architecture / How it Works

AttireSense operates as a lightweight, static client application communicating directly with external AI services:

1. **Data Collection:** The user completes an onboarding flow. Answers regarding body type, climate, and occasion are captured and immediately serialized into `LocalStorage`.
2. **Context Compilation:** When the user requests an outfit, the app dynamically constructs a comprehensive context prompt (`buildSystemPrompt`), merging the user's profile data with strict formatting rules.
3. **AI Inference:** The context and user query are sent to the Google Gemini 2.0 API via an asynchronous REST call.
4. **Data Parsing & Rendering:** The application intercepts the AI's response, applies custom regex-based parsing (`renderAIMessage`) to extract specific clothing categories (Top, Bottom, Shoes, etc.), and renders a structured, visually appealing UI card, falling back to clean Markdown if the format isn't strictly adhered to.

---

## 🧠 Technical Highlights & Learnings

- **Strict Output Parsing from LLMs:** One of the main challenges was ensuring the Gemini model consistently output data in a format the frontend could parse into structured UI components (rather than just text blocks). This was solved through aggressive prompt engineering, demanding specific emoji markers (`👕`, `👖`), and building robust fallback parsers that degrade gracefully to standard markdown if the LLM hallucinates formatting.
- **State Management without Frameworks:** Managing complex user profiles across multiple views without React or Vue required implementing a centralized utility module (`attiresense.js`) to handle LocalStorage synchronization predictably, proving that complex state can be managed cleanly with Vanilla JS.
- **Responsive, Complex UI in Vanilla CSS:** Developed a full design system (variables, glass-morphism, responsive grids, and CSS animations) from scratch, demonstrating deep understanding of modern CSS architecture without relying on Tailwind or Bootstrap.

---

## 📬 Contact

I'm a software engineer passionate about creating clean, user-centric applications and solving complex technical challenges.

- **LinkedIn:** [linkedin.com/in/yourprofile](#)
- **Portfolio:** [yourportfolio.com](#)
- **GitHub:** [github.com/yourusername](#)

*If you are a technical recruiter or engineering manager, I would love to connect and discuss how I can bring value to your team.*
