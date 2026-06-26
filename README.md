# AttireSense

> **Look Better, Effortlessly.** AttireSense is an AI-powered personal stylist application that provides context-aware, highly personalized outfit recommendations tailored to your unique body type, skin tone, and occasion.

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)
![Tech Stack](https://img.shields.io/badge/Tech_Stack-Vanilla_JS_%7C_HTML5_%7C_CSS3-f0db4f)
![AI](https://img.shields.io/badge/AI-Gemini_2.0_Flash-4285F4)

## Visuals
![Demo](./assets/demo.gif)

## Live Links
**[Live Deployment](#)** | **[Documentation](#)**

## Features
* **AI-Powered Personal Stylist**: Leverages the Google Gemini 2.0 Flash API to generate dynamic, intelligent outfit recommendations formatted as clean UI cards.
* **Context-Aware Recommendations**: Adapts suggestions based on nine unique profile factors including climate, occasion, skin tone, and body shape.
* **Client-Side State Management**: Utilizes browser LocalStorage for efficient, zero-backend persistence of user profiles and API credentials.
* **Responsive, Glassmorphism UI**: A fully responsive frontend built without frameworks, employing modern CSS3 features like backdrop filters and grid layouts for a sleek user experience.
* **Intelligent Markdown Parsing**: Custom lightweight markdown parser implemented in Vanilla JS to safely render AI outputs without heavy dependencies.

## Tech Stack
* **Frontend**: Vanilla JavaScript (ES6+), HTML5, CSS3
* **State Management**: Browser LocalStorage
* **APIs Utilized**: Google Gemini 2.0 Flash API (via REST)
* **Architecture**: Zero-dependency static site, client-side only

## Installation & Setup

<details>
<summary>Click to expand step-by-step installation instructions</summary>

### Prerequisites
* Node.js installed on your machine (for running a local static server like `serve`).

### Steps
1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/attiresense.git
   cd attiresense
   ```

2. **Configure Environment Variables:**
   * Review the `.env.example` file for reference.
   * Note: This application uses client-side LocalStorage to securely store the Gemini API key entered by the user directly in the UI, requiring no backend environment variables.

3. **Run the Application Locally:**
   Since this project uses Vanilla JS without a build step, you can simply run a static server:
   ```bash
   npx serve .
   ```
   *The application will now be running on `http://localhost:3000` (or another port specified by `serve`).*

</details>

## Architecture / How it Works
AttireSense operates entirely on the client side, leveraging a zero-backend architecture for speed and simplicity.
1. **User Onboarding**: Users input their physical characteristics and style preferences, which are saved directly to `LocalStorage`.
2. **Prompt Engineering**: The application dynamically constructs a highly specific system prompt combining the user's profile state and the current query.
3. **AI Inference**: A REST call is made to the Google Gemini 2.0 Flash API.
4. **Data Parsing & UI Rendering**: The custom parsing engine intercepts the AI's plain-text response, extracts outfit parameters based on emoji markers, and dynamically builds structured HTML cards, securely escaping untrusted data.

## Technical Highlights & Learnings
* **Dependency-Free Architecture**: Building a complex application entirely with Vanilla JS and CSS was a deliberate choice to ensure deep understanding of DOM manipulation, event delegation, and modern CSS layout techniques without relying on React or Tailwind.
* **Custom Markdown Parser & XSS Prevention**: Parsing LLM output directly into HTML poses security risks. I implemented a custom `markdownLite` function and `escSafe` sanitizer that intelligently constructs structured cards while preventing Cross-Site Scripting (XSS).
* **Prompt Engineering for Structured Output**: One major challenge was ensuring the LLM consistently returned data in a format the UI could parse. This was overcome by writing rigorous system prompts that mandate specific emoji markers and line structures, resulting in reliable, easily parseable outputs.

## Contact
**[LinkedIn Profile](#)** | **[Portfolio](#)**
