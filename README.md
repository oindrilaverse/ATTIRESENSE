<div align="center">

# AttireSense

**Look Better, Effortlessly.**
*An AI-powered personal stylist application that generates personalized, context-aware outfit recommendations based on your unique body type, skin tone, and daily occasions.*

[![Build Status](https://img.shields.io/badge/build-passing-success)](#)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](#)
[![Vanilla JS](https://img.shields.io/badge/JavaScript-Vanilla-yellow)](#)
[![AI Powered](https://img.shields.io/badge/AI-Gemini_2.0_Flash-purple)](#)

</div>

---

## 📸 Visuals

![Demo](./assets/demo.gif)

---

## 🚀 Live Links

- **[Live Deployment](#)** *(Link to live site)*
- **[Documentation](#)** *(Link to full docs)*

---

## ✨ Features

- **Color-Matched Outfits:** Advanced AI analysis of skin tone to suggest colors that genuinely complement the user's natural complexion.
- **Body-Type Aware:** Proportions matter. Styling tips are meticulously tailored to height, build, and unique body shapes.
- **Occasion & Climate Smart:** Context-aware recommendations that adapt to specific events (e.g., office meetings, date nights) and current weather conditions.
- **Instant AI Chat Interface:** Real-time, fluid conversations with the AI stylist, generating structured, easy-to-read outfit cards.

---

## 🛠 Tech Stack

AttireSense was built with a deliberate focus on zero-dependency performance and clean architecture.

- **Frontend:** Vanilla JavaScript (ES6+), HTML5, CSS3 (No heavy frameworks, ensuring lightning-fast load times).
- **Backend / AI Integration:** Google Gemini 2.0 Flash API (Direct REST integration for high-speed AI inference).
- **State Management & Storage:** Browser LocalStorage (Efficient, localized data persistence without external databases).

---

## ⚙️ Installation & Setup

<details>
<summary><strong>Click to expand step-by-step installation instructions</strong></summary>

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/attiresense.git
cd attiresense
```

### 2. Environment Variables
To enable the AI capabilities, you will need a Google Gemini API key.
Copy the example environment file and add your key:
```bash
cp .env.example .env
```
*Note: In the current implementation, the API key is securely entered and stored locally via the application UI. The `.env` file structure is prepared for future backend decoupling.*

### 3. Run Locally
Since the project uses pure Vanilla JS, there is no build step or package manager required. Simply serve the directory:
```bash
npx serve .
```
Navigate to `http://localhost:3000` in your browser.

</details>

---

## 🏗 Architecture / How it Works

1. **User Onboarding:** The user completes a 9-step onboarding flow to build their style profile (e.g., height, skin tone, preferred style).
2. **State Management:** This profile is immediately persisted to `LocalStorage`, providing a seamless return experience without user authentication friction.
3. **Prompt Engineering:** When the user requests an outfit via the Chat UI, the application dynamically constructs a highly specific system prompt combining the user's profile state and their explicit request.
4. **AI Inference:** The payload is sent via a direct REST call to the **Google Gemini 2.0 Flash API**.
5. **Custom Parsing:** The raw text response from Gemini is intercepted by a custom Vanilla JS parser that extracts emoji-delimited sections (Top, Bottom, Shoes, etc.) and renders them into structured, beautiful UI cards, falling back to a custom Markdown parser for standard conversational text.

---

## 💡 Technical Highlights & Learnings

- **Framework-less State Management:** Designing a robust, scalable architecture to handle user state and navigation flows purely in Vanilla JS reinforced deep understanding of the DOM, event delegation, and browser storage mechanisms.
- **Unstructured Data Parsing:** One of the main challenges was reliably converting unstructured LLM text responses into strict, predictable UI components. I engineered a robust regex-based parser that identifies specific markers to dynamically construct DOM elements, ensuring a consistent user experience even when the AI response format slightly varies.
- **RESTful AI Integration:** Directly integrating with the Gemini REST API provided valuable experience in asynchronous request handling, prompt engineering, and managing API key security on the client side.

---

## 📫 Contact

Built by **[Your Name]**

- [LinkedIn](#)
- [Portfolio](#)
- [GitHub](#)
