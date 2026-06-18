<div align="center">

# ✨ AttireSense

**Look Better, Effortlessly.**
An AI-powered personal stylist that learns your unique body type, skin tone, and style preferences to generate personalized outfit recommendations for any occasion.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)](#)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](#)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](#)
[![Gemini API](https://img.shields.io/badge/Google%20Gemini-API-4285F4?logo=google&logoColor=white)](#)

</div>

<br />

## 🎥 Visuals

<div align="center">

![Demo](./assets/demo.gif)

*Placeholder for demo GIF demonstrating the seamless onboarding and AI chat flow.*

</div>

## 🔗 Live Links

- **[Live Deployment](https://your-deployment-link.com)** (Placeholder)
- **[Project Portfolio](https://your-portfolio-link.com)** (Placeholder)

---

## 🚀 Features

- **Personalized Onboarding Flow:** A smooth, 9-step wizard capturing user details (gender, skin tone, height, body shape, climate, etc.) stored securely via LocalStorage for frictionless return visits.
- **Context-Aware AI Chat:** Integrates directly with the Google Gemini 2.0 Flash API to generate highly tailored, structured fashion recommendations based on the user's specific profile and prompt.
- **Smart Outfit Parsing & Rendering:** Custom client-side parsing logic that transforms raw AI text responses into beautifully styled, interactive outfit UI cards with distinct sections (Top, Bottom, Shoes, Accessories).
- **Responsive Glassmorphism UI:** A sleek, modern user interface built without frontend frameworks, featuring smooth CSS transitions, glowing orbs, and mobile-first design principles.
- **Zero-Dependency Architecture:** Completely lightweight frontend built purely with Vanilla JavaScript, HTML5, and CSS3, ensuring incredibly fast load times and optimized performance.

---

## 🛠 Tech Stack

**Frontend**
- Vanilla JavaScript (ES6+)
- HTML5
- CSS3 (Custom Variables, CSS Grid, Flexbox, Keyframe Animations)

**APIs & Integrations**
- Google Gemini API (2.0 Flash REST Integration)

**State Management**
- Browser LocalStorage API

---

## ⚙️ Installation & Setup

<details>
<summary><strong>Click to expand setup instructions</strong></summary>

### 1. Clone the repository
```bash
git clone https://github.com/your-username/attiresense.git
cd attiresense
```

### 2. Run Locally
Because this project uses vanilla HTML, CSS, and JS without a build step, you can simply run it using a static file server:
```bash
# Using npx and serve
npx serve .

# Alternatively, using Python
python3 -m http.server 8000
```
Open your browser and navigate to `http://localhost:3000` (or `http://localhost:8000`).

### 3. API Key Setup
The application requires a Google Gemini API Key to power the chat functionality.
1. Get a free API key from [Google AI Studio](https://aistudio.google.com/app/apikey).
2. Open the app in your browser.
3. The app will prompt you to enter your API key, or you can click the **"🔑 API Key"** button in the navigation bar to save it locally.
*Note: The key is securely stored in your browser's LocalStorage and is never transmitted anywhere other than the official Google API.*

</details>

---

## 🏗 Architecture / How it Works

AttireSense operates entirely on the client side, utilizing a lean and efficient data flow:

1. **State Management:** User preferences are captured through the onboarding flow and saved to the browser's `LocalStorage`.
2. **Dynamic Prompt Engineering:** When a user asks a fashion question, the `chat.js` module retrieves the saved profile data and constructs a highly specific **System Prompt**. This prompt enforces strict rules on the AI's output format (using specific emojis and layout constraints).
3. **API Integration:** The application makes an asynchronous `fetch` request to the Google Gemini 2.0 Flash REST API, passing the engineered system prompt along with the chat history.
4. **Custom Parsing:** Upon receiving the AI's response, a custom `renderAIMessage` function parses the text line-by-line, detecting emoji markers to extract clothing items. It then dynamically generates structured HTML cards for a polished presentation, falling back to a markdown-lite converter for general conversational responses.

---

## 🧠 Technical Highlights & Learnings

- **Strict AI Response Formatting:** One of the main challenges was ensuring the Gemini API consistently returned structured data for the UI cards without relying on heavier, slower function-calling features. I overcame this by engineering a highly explicit system prompt with strict output rules and custom client-side parsing logic that searches for specific emoji markers to extract outfit details safely.
- **Client-Side Data Persistence:** I implemented a robust `localStorage` wrapper to manage user state seamlessly across the onboarding and chat pages, demonstrating an understanding of client-side state management without the overhead of Redux or Context API.
- **Vanilla JS Architecture:** Building the app entirely without a framework (like React or Vue) pushed me to deeply understand DOM manipulation, event delegation, and module organization, resulting in a deeper mastery of core JavaScript concepts.
- **Advanced CSS Techniques:** Implemented complex CSS strategies including CSS variables for theming, custom scrollbars, backdrop filters for glassmorphism effects, and custom keyframe animations, ensuring a highly polished UX purely through CSS.

---

## 📬 Contact

Let's connect! I'm always open to discussing new opportunities or collaborating on exciting projects.

- **LinkedIn:** [Your LinkedIn Profile](https://linkedin.com/in/your-profile)
- **Portfolio:** [Your Portfolio Website](https://your-portfolio.com)
- **GitHub:** [Your GitHub Profile](https://github.com/your-username)
