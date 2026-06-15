<div align="center">

# ✨ AttireSense

**Look Better, Effortlessly.**

*An AI-powered personal stylist that learns your body type, skin tone, and style—then suggests the perfect outfit for any occasion.*

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](#)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](#)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](#)
[![Gemini API](https://img.shields.io/badge/Google_Gemini-8E75B2?style=for-the-badge&logo=googlebard&logoColor=white)](#)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](#)

</div>

<br />

## 📸 Visuals

<div align="center">
  <img src="./assets/demo.gif" alt="Demo" width="100%" />
</div>

<br />

## 🔗 Live Links

- **Live Deployment:** [View Live App](#) *(Placeholder link)*
- **Documentation:** [Read the Docs](#) *(Placeholder link)*

---

## 🚀 Features

AttireSense offers a deeply personalized styling experience by analyzing various user traits and providing contextual recommendations.

- 🎨 **Color-Matched Outfits:** AI analyzes your skin tone and recommends colors that complement your natural complexion—removing the guesswork from color coordination.
- 🧍 **Body-Type Aware:** Receive clothing recommendations that fit *your* proportions. Styling tips are tailored to your height, build, and unique body shape.
- 📍 **Occasion & Climate Smart:** Whether it's an office meeting, a date night, or a casual Sunday, AttireSense adapts every recommendation to your specific context and the current weather.
- 💬 **Interactive AI Stylist:** Chat with the AI to ask specific questions like "What should I wear for a job interview?" and receive an instant, personalized outfit breakdown.

---

## 🛠 Tech Stack

AttireSense is intentionally built without heavyweight frontend frameworks to demonstrate proficiency in core web technologies and clean architecture.

### **Frontend**
- **Vanilla JavaScript (ES6+):** For DOM manipulation, state management, and handling asynchronous API requests.
- **HTML5:** Semantic structuring of the application.
- **CSS3:** Advanced CSS utilizing Custom Properties (Variables), Flexbox, CSS Grid, and custom animations for a polished UI.

### **AI Integration**
- **Google Gemini API:** Utilized via REST to process user profiles and generate structured outfit recommendations.

### **State Management**
- **LocalStorage API:** Persists user style profiles and API keys locally, ensuring privacy and seamless return visits without a backend database.

---

## ⚙️ Installation & Setup

Want to run AttireSense locally? Follow these steps to get started.

<details>
<summary><b>Click to view installation instructions</b></summary>

<br>

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/attiresense.git
   cd attiresense
   ```

2. **Run a local development server:**
   Since this is a static site without a build step, you can use a simple static server like `npx serve`:
   ```bash
   npx serve .
   ```
   *Alternatively, you can use the Live Server extension in VS Code or python's `http.server`.*

3. **Set up the Gemini API Key:**
   - Open the application in your browser (usually `http://localhost:3000`).
   - Navigate to the settings or prompt within the app to input your Google Gemini API key.
   - The key is saved securely in your browser's LocalStorage.

</details>

---

## 🏗 Architecture / How it Works

The core logic of AttireSense follows a simple yet effective data flow:

1. **Profile Building:** Users answer a series of questions regarding their body shape, skin tone, climate, and occasion. This data is captured and serialized.
2. **State Storage:** The user profile is saved locally using the browser's `localStorage` API (managed in `attiresense.js`).
3. **Prompt Engineering:** When the user requests an outfit, the saved profile is dynamically injected into a comprehensive system prompt designed to enforce a specific output format.
4. **AI Processing:** The prompt is sent to the Google Gemini API.
5. **Parsing & Rendering:** The unstructured text response from the LLM is intercepted. A custom parsing algorithm (using Regular Expressions) extracts specific sections (Top, Bottom, Shoes, Accessories, Why it works) and renders them into structured, highly-styled UI cards.

---

## 🧠 Technical Highlights & Learnings

Building AttireSense presented several interesting engineering challenges:

- **State Management without a Framework:** Decoupling state management from the DOM using Vanilla JS required careful design. I implemented utility functions (`saveProfile`, `getProfile`) that act as a centralized store, mimicking the behavior of tools like Redux but with the simplicity of LocalStorage.
- **Parsing Unstructured LLM Outputs:** One of the main challenges was ensuring the UI could gracefully handle responses from the Gemini API. Instead of relying solely on markdown parsing, I built a robust Regex-based parser that detects specific emoji-labeled sections and converts them into structured HTML cards, while maintaining a fallback for generic conversational responses.
- **Maintainable CSS Architecture:** To manage the application's visual complexity, I utilized CSS Custom Properties heavily. This created a cohesive design system (colors, spacing, shadows, and animations) that is easy to theme and scale.

---

## 📫 Contact

Feel free to reach out if you have any questions or want to discuss the project!

- **LinkedIn:** [Your LinkedIn Profile](#)
- **Portfolio:** [Your Portfolio Website](#)
