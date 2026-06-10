<div align="center">

# ✨ AttireSense
**Look Better, Effortlessly.**

*An AI-powered personal stylist that learns your body type, skin tone, and style preferences to deliver perfectly tailored outfit recommendations.*

![Build Status](https://img.shields.io/badge/build-passing-brightgreen?style=flat-square)
![Vanilla JS](https://img.shields.io/badge/JavaScript-Vanilla-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Gemini AI](https://img.shields.io/badge/AI-Gemini_2.0_Flash-4A90E2?style=flat-square&logo=google)
![License](https://img.shields.io/badge/license-MIT-blue?style=flat-square)

</div>

---

## 📸 Visuals

<div align="center">

![Demo](./assets/demo.gif)
*Placeholder for project demonstration GIF showing the onboarding flow and AI chat interface.*

</div>

---

## 🔗 Live Links

- **Live Deployment:** [AttireSense Demo](#) *(Insert live link here)*
- **Documentation:** [Google Gemini API Docs](https://ai.google.dev/docs)

---

## 🌟 Features

- **Personalized Onboarding:** A streamlined, 9-step profile builder capturing crucial styling data (skin tone, body shape, climate, occasion, and style preferences).
- **Intelligent Outfit Generation:** Direct integration with Google's Gemini 2.0 Flash API to generate dynamic, tailored clothing combinations.
- **Smart Color Matching:** Recommendations intrinsically tied to user skin tone and environmental context.
- **Custom AI Output Parsing:** A bespoke lightweight parser that translates unstructured LLM text into a clean, structured UI "Outfit Card" component without relying on heavy external markdown libraries.
- **Privacy-First State Management:** Secure, localized storage of user profiles and API credentials using browser `LocalStorage`—no backend database required.
- **Responsive "Glassmorphism" UI:** A modern, visually engaging frontend built purely with HTML5 and CSS3, ensuring a smooth experience across desktop and mobile devices.

---

## 🛠 Tech Stack

**Frontend**
- HTML5 / CSS3 (Custom CSS variables, Animations, Flexbox/Grid)
- Vanilla JavaScript (ES6+)

**AI & APIs**
- Google Gemini 2.0 Flash (via REST API)

**Architecture / Deployment**
- Client-Side Single Page Application (SPA) structure
- LocalStorage for state management

---

## 🚀 Installation & Setup

<details>
<summary><strong>Click to view step-by-step installation instructions</strong></summary>

### Prerequisites
- A modern web browser.
- A free Google Gemini API Key. Get one at [Google AI Studio](https://aistudio.google.com/app/apikey).

### Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/AttireSense.git
   cd AttireSense
   ```

2. **Environment Setup:**
   Since this is a frontend-only application using `LocalStorage`, no `.env` file is required for the codebase itself. However, you will need your Gemini API key ready.

3. **Run the Application Locally:**
   You can serve the static files using any local web server. For example, using Python or Node.js:

   *Using Python:*
   ```bash
   python3 -m http.server 8000
   ```
   *Using npx (Node.js):*
   ```bash
   npx serve .
   ```

4. **Launch:**
   Open your browser and navigate to `http://localhost:8000` (or the port specified by your local server).

5. **Configure API Key:**
   Click the "🔑 API Key" button in the navigation bar and paste your Gemini API key to enable the AI stylist.

</details>

---

## 🏗 Architecture / How it Works

AttireSense operates as a standalone client-side application. The core logic follows this flow:

1. **Data Collection:** The user completes an onboarding flow (`onboarding.js`), storing 9 key styling attributes in the browser's `LocalStorage`.
2. **Prompt Engineering:** When the user initiates a chat (`chat.js`), the application retrieves the profile data and constructs a comprehensive system prompt (`app.js`). This prompt instructs the Gemini model to respond using specific formatting constraints and emojis.
3. **API Communication:** The app makes a REST call to the Gemini 2.0 Flash API endpoint, handling asynchronous data fetching and error states entirely on the client.
4. **Custom Parsing & Rendering:** Upon receiving the text payload from Gemini, a custom parser (`renderAIMessage` in `app.js`) intercepts the response. It identifies specific emoji anchors to extract the Top, Bottom, Shoes, and Accessories, dynamically rendering a styled HTML "Outfit Card" into the chat DOM.

---

## 🧠 Technical Highlights & Learnings

Developing AttireSense without a frontend framework like React or Vue presented unique engineering challenges that reinforced strong vanilla JavaScript fundamentals:

- **State Management without a Framework:** Managing the 9-step onboarding state and synchronizing it with `LocalStorage` required building a reliable, event-driven architecture to ensure the UI accurately reflected the underlying data at all times.
- **Taming LLM Output:** One of the biggest challenges was ensuring the Gemini API returned structured data that could be cleanly rendered into a UI component. Instead of relying on complex JSON schemas which can sometimes fail or increase latency, I utilized rigid prompt engineering combined with a custom regex-based parser. This approach extracts data based on specific emoji anchors, ensuring a robust and fault-tolerant UI render even if the LLM slightly deviates from the prompt.
- **Performance & Security:** By handling the API key directly in the browser's `LocalStorage` and communicating directly via REST, the application maintains zero server-side overhead and prioritizes user privacy, as sensitive styling data never leaves the user's device (other than via the encrypted payload sent to Google's API).

---

## 📬 Contact

I'm always open to discussing technology, engineering practices, and new opportunities.

- **LinkedIn:** [Your LinkedIn Profile](#)
- **Portfolio:** [Your Portfolio Website](#)
- **Email:** your.email@example.com

---
<div align="center">
  <small>Built with ❤️ and Vanilla JS</small>
</div>
