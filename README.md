# AttireSense ✨

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg?style=flat-square)](#)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](#)
[![Tech Stack](https://img.shields.io/badge/Tech-Vanilla%20JS%20%7C%20HTML5%20%7C%20CSS3-orange.svg?style=flat-square)](#)
[![AI Integration](https://img.shields.io/badge/AI-Google%20Gemini%202.0-purple.svg?style=flat-square)](#)

AttireSense is an AI-powered personal stylist application designed to help users look better, effortlessly. By analyzing unique factors like body type, skin tone, and occasion, the application delivers hyper-personalized outfit recommendations in real-time.

---

## 📸 Visuals

![Demo](./assets/demo.gif)
*(Placeholder for Demo GIF)*

---

## 🔗 Live Links

- **Live Deployment:** [View Live App](#) *(Link to live deployment)*
- **Documentation:** [Read the Docs](#) *(Link to relevant documentation)*

---

## 🚀 Features

- **Hyper-Personalized AI Recommendations:** Integrates directly with the Google Gemini 2.0 Flash API to generate dynamic, tailored outfit suggestions.
- **Color & Context Awareness:** AI analyzes user skin tone, local climate, and event occasion to recommend complementary colors and practical layers.
- **Interactive Chat Interface:** A sleek, fully responsive conversational UI built from scratch to handle seamless user-AI interactions.
- **Local State Management:** Securely stores user profile preferences and API keys utilizing browser LocalStorage—ensuring privacy and speed without requiring a backend database.
- **Zero-Dependency Architecture:** Built purely with Vanilla JavaScript, HTML5, and CSS3, demonstrating a deep understanding of core web fundamentals and DOM manipulation without relying on external frameworks.

---

## 🛠️ Tech Stack

**Frontend:**
- HTML5 (Semantic & Accessible)
- CSS3 (Custom Variables, Flexbox/Grid, Animations)
- Vanilla JavaScript (ES6+)

**Data & State Management:**
- Browser LocalStorage API

**Third-Party APIs:**
- Google Gemini 2.0 Flash REST API

**Deployment & Tooling:**
- Git & GitHub
- Static File Hosting (e.g., GitHub Pages, Vercel, Netlify)

---

## ⚙️ Installation & Setup

<details>
<summary><strong>Click to expand step-by-step setup instructions</strong></summary>

### Prerequisites
- A modern web browser
- Python 3.x (or Node.js) installed for running a local development server
- A valid Google Gemini API Key

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/AttireSense.git
cd AttireSense
```

### 2. Environment Setup
Since this project runs entirely client-side, the API key is provided by the user within the UI. However, for development purposes, you might want to create a local environment reference.
Create a `.env.example` file to document required keys:
```bash
touch .env.example
echo "GEMINI_API_KEY=your_api_key_here" > .env.example
```

### 3. Run Locally
Because this project utilizes ES6 modules or absolute paths in some contexts, it's best to serve it over a local HTTP server rather than opening the files directly.

Using Python:
```bash
python3 -m http.server 3000
```

Or using Node.js/npx:
```bash
npx serve .
```

### 4. View the App
Open your browser and navigate to:
```
http://localhost:3000
```
Enter your Gemini API key in the application's settings modal to enable the AI features.

</details>

---

## 🏗️ Architecture / How it Works

AttireSense operates on a lightweight, client-heavy architecture designed for speed and simplicity:
1. **User Input:** The user fills out an onboarding form detailing their physical characteristics and style preferences.
2. **Local Storage:** This data is immediately serialized and saved to the browser's LocalStorage, persisting across sessions.
3. **Prompt Engineering:** When the user asks a question in the chat interface, the application constructs a highly optimized system prompt combining the user's LocalStorage profile with their chat input.
4. **AI Generation:** The frontend makes a direct REST API call to Google's Gemini 2.0 Flash endpoint.
5. **Dynamic Parsing:** The incoming markdown/text response is parsed by custom JavaScript logic to extract specific outfit components (Top, Bottom, Shoes, etc.) and inject them into structured, styled HTML cards dynamically.

---

## 🧠 Technical Highlights & Learnings

Building AttireSense presented several distinct engineering challenges that were successfully overcome:

- **Parsing Unstructured AI Responses:** One of the main challenges was taking open-ended AI text and turning it into structured UI components (Outfit Cards). I implemented a custom, lightweight markdown-like parser using Regular Expressions to safely extract specific clothing categories and format them consistently, regardless of slight variations in the AI's output format.
- **Framework-less State Management:** Instead of relying on Redux or React Context, I built a modular utility system for reading, writing, and merging user state directly with LocalStorage. This keeps the application incredibly fast and reduces the bundle size to almost zero.
- **Secure API Key Handling:** To ensure user security without a backend, the application prompts the user for their own Gemini API key, storing it purely in LocalStorage. It is never transmitted anywhere except directly to Google's secure endpoints.
- **Responsive & Modern CSS:** Achieved a polished, "glassmorphism" aesthetic with floating animations, dynamic background orbs, and complex CSS grid layouts without touching CSS libraries like Tailwind or Bootstrap.

---

## 📫 Contact

- **LinkedIn:** [linkedin.com/in/yourprofile](#)
- **Portfolio:** [yourportfolio.com](#)

*Thank you for checking out AttireSense. If you're looking for a developer who writes clean, maintainable, and user-focused code, let's connect!*
