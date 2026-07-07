<div align="center">

# AttireSense

**Look Better, Effortlessly.** An AI-powered personal stylist application that provides context-aware outfit recommendations tailored to your unique body type, skin tone, and style preferences.

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![Vanilla JS](https://img.shields.io/badge/Vanilla-JS-F7DF1E?logo=javascript&logoColor=black)
![Gemini AI](https://img.shields.io/badge/AI-Gemini_2.0_Flash-4285F4?logo=google&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)

</div>

## Visuals
<div align="center">

![Demo](./assets/demo.gif)

</div>

## Live Links
- **Live Deployment:** [attiresense.example.com](https://attiresense.example.com)
- **Documentation:** [Wiki / Docs](https://github.com/username/attiresense/wiki)

## Features
- **Context-Aware AI Styling:** Integrates directly with the Gemini 2.0 Flash API to generate deeply personalized outfit suggestions tailored to the user's specific age, skin tone, body shape, and climate.
- **Dynamic Profile Management:** Seamless, persistent state management using browser LocalStorage for a frictionless user experience across sessions without the overhead of a database.
- **Custom Parsing Engine:** A robust client-side parser translates unstructured AI responses into clean, structured UI components (Outfit Cards).
- **Zero-Dependency Architecture:** Built entirely with Vanilla JavaScript, HTML5, and CSS3, ensuring lightning-fast load times, a highly maintainable codebase, and a deep understanding of core web APIs.
- **Responsive & Accessible UI:** A modern, glass-morphism interface featuring fluid animations, accessible color contrast, and fully responsive layouts across devices.

## Tech Stack
- **Frontend:** HTML5, CSS3, Vanilla JavaScript (ES6+)
- **State Management:** LocalStorage API
- **APIs Utilized:** Google Gemini 2.0 Flash API (via REST)
- **Deployment:** Vercel / GitHub Pages

## Installation & Setup

<details>
<summary><strong>Click to expand setup instructions</strong></summary>

### Prerequisites
- A modern web browser
- Python 3 or Node.js (for running a local static server)
- A Google Gemini API Key

### Steps
1. **Clone the repository:**
   ```bash
   git clone https://github.com/username/attiresense.git
   cd attiresense
   ```

2. **Environment Variables:**
   Create a `.env` file based on the provided `.env.example` template to store any build-time variables.
   *(Note: For the live app, users input their Gemini API key directly via a secure modal which safely stores the key in LocalStorage.)*
   ```bash
   cp .env.example .env
   ```

3. **Run Locally:**
   Since this project uses no build tools or frontend frameworks, simply run a static file server.

   Using Python:
   ```bash
   python3 -m http.server 3000
   ```

   Or using Node.js (`serve`):
   ```bash
   npx serve . -p 3000
   ```

4. **Access the App:**
   Open `http://localhost:3000` in your browser.

</details>

## Architecture / How it Works
AttireSense leverages a lightweight, serverless architecture by shifting state and API communication to the client.
1. **Data Collection:** Users complete a multi-step onboarding flow. The core data (gender, skin tone, body type, occasion) is serialized and stored persistently via the LocalStorage API.
2. **Prompt Engineering:** The application dynamically constructs a highly specific system prompt, injecting the user's profile state to precisely guide the AI's inference.
3. **AI Inference:** The client communicates directly with the Google Gemini 2.0 Flash API over REST. Error handling, rate limiting, and fallback states are managed seamlessly to ensure reliability.
4. **Data Parsing & Rendering:** The unstructured text response from Gemini is parsed using custom regex and string manipulation into a structured format, which is then mapped to modular UI components for display.

## Technical Highlights & Learnings
- **Building a Zero-Dependency Frontend:** Choosing to avoid frameworks like React or Vue was a deliberate constraint to solidify my understanding of the DOM, event delegation, and state synchronization in Vanilla JS. It forced me to write cleaner, more modular code (e.g., separating utility functions in `app.js` from UI logic in `chat.js`).
- **Robust AI Response Parsing:** LLMs are inherently unpredictable. A major challenge was ensuring the UI didn't break if Gemini deviated slightly from the instructed output format. I built a resilient fallback parser that gracefully handles missing parameters and malformed text, guaranteeing a consistent user experience.
- **Security & Key Management:** Handling API keys client-side is tricky. To mitigate risks in a serverless environment, the app uses a bring-your-own-key (BYOK) model via a secure UI modal, storing the key entirely in the user's LocalStorage rather than hardcoding it into the repository.
- **CSS Architecture:** Engineered a modular CSS structure utilizing CSS variables for theming, resulting in highly reusable, maintainable style definitions and fluid, performant CSS animations.

## Contact
- **LinkedIn:** [linkedin.com/in/yourprofile](https://linkedin.com/in/yourprofile)
- **Portfolio:** [yourportfolio.com](https://yourportfolio.com)
- **GitHub:** [github.com/username](https://github.com/username)
