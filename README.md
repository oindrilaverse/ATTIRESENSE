# AttireSense ✨
![Build Status](https://img.shields.io/badge/build-passing-success?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-blue?style=flat-square)
![Tech](https://img.shields.io/badge/tech-Vanilla_JS-f7df1e?style=flat-square)
![API](https://img.shields.io/badge/API-Gemini_2.0_Flash-4285F4?style=flat-square)

AttireSense is an AI-powered personal stylist application that provides context-aware, hyper-personalized outfit recommendations based on a user's unique body type, skin tone, environment, and style preferences. By leveraging the latest Google Gemini 2.0 Flash API, it eliminates decision fatigue and makes dressing well effortless.

## Visuals
![Demo](./assets/demo.gif)

## Live Links
- **Live Deployment:** [AttireSense App](https://example.com/attiresense)
- **Documentation:** [Wiki / API Docs](https://example.com/docs)

## Features
- **Hyper-Personalized Styling Agent:** Captures and analyzes 9 distinct user profile factors (including climate, skin tone, and body shape) to deliver precise, context-aware outfit combinations.
- **Real-time AI Chat Interface:** Seamless conversational UI built from the ground up, capable of parsing and dynamically rendering structured Markdown responses from the LLM into aesthetic HTML outfit cards.
- **Intelligent Prompt Engineering:** Employs a robust system prompt strategy that dynamically injects user state to enforce consistent, structured output formats from the Gemini API.
- **Zero-Dependency State Management:** Entirely custom local state layer leveraging browser `LocalStorage` to securely persist user profiles and API keys without backend database overhead.
- **Responsive & Accessible Design:** Features a mobile-first, glass-morphic UI with CSS variables, semantic HTML, and fluid typography, ensuring an optimal user experience across all devices.

## Tech Stack
- **Frontend Core:** HTML5, CSS3, Vanilla JavaScript (ES6+)
- **AI & Integrations:** Google Gemini 2.0 Flash REST API
- **State Management:** Native Web Storage API (LocalStorage)
- **Deployment & Tooling:** Local Static Server (`python3 -m http.server`)

## Installation & Setup
<details>
<summary><strong>Click to expand step-by-step instructions</strong></summary>

1. **Clone the repository:**
   ```bash
   git clone https://github.com/username/attiresense.git
   cd attiresense
   ```

2. **Environment Variables:**
   A `.env.example` file is provided for reference (even though API keys are managed locally via the UI for user security). You can review it to understand the required API configuration.
   ```bash
   cat .env.example
   ```
   *Note: In the app, you will input your Gemini API key directly via the settings modal, which securely stores it in LocalStorage.*

3. **Run the local server:**
   Since this project uses pure Vanilla JS with ES modules and fetches, it requires a static file server to avoid CORS issues.
   ```bash
   # Using Python 3
   python3 -m http.server 3000

   # OR using Node's serve
   npx serve .
   ```

4. **Open the application:**
   Navigate to `http://localhost:3000` in your web browser.

</details>

## Architecture / How it Works
AttireSense operates entirely on the client side, orchestrating a fluid data pipeline between the UI, LocalStorage, and the Gemini API.
1. **Onboarding & State:** Users complete a multi-step onboarding flow. Their preferences are captured and synced to `LocalStorage` using a custom, lightweight state management utility.
2. **Prompt Construction:** When a user requests an outfit, the app pulls their state and dynamically injects it into a highly-tuned system prompt, establishing the context and strict output formatting rules for the AI.
3. **API Integration:** The client makes a direct REST API call to `generativelanguage.googleapis.com` using the user's locally stored Gemini API key, ensuring privacy and eliminating the need for a proxy server.
4. **Parsing & Rendering:** The application intercepts the unstructured text response, runs it through a custom parsing algorithm (via regex and line-by-line tokenization), and maps the recognized attributes (Top, Bottom, Shoes, Accessories, Why it Works) into structured DOM nodes.

## Technical Highlights & Learnings
- **Building a Custom Markdown Parser:** One of the main challenges was ensuring the LLM returned data in a predictable format so the UI could render visual "Outfit Cards" rather than a wall of text. I solved this by heavily constraining the model via the system prompt to use exact emoji markers (e.g., `👕 Top:`), and writing a custom parsing algorithm to extract and map these sections into HTML components safely, completely mitigating XSS risks via a custom HTML escape utility.
- **Vanilla JS Architecture at Scale:** Building without a frontend framework like React forced a deep dive into DOM manipulation, event delegation, and state synchronization. I implemented a modular approach, separating API logic, state management, and view rendering, which kept the codebase maintainable and highly performant.
- **Graceful Error Handling:** Integrated comprehensive try-catch blocks and custom UI error states to handle API timeouts, invalid keys, or malformed LLM responses gracefully, ensuring the user experience remains uninterrupted.

## Contact
- **LinkedIn:** [Your Name](https://linkedin.com/in/yourprofile)
- **Portfolio:** [yourportfolio.com](https://yourportfolio.com)
