# ✨ AttireSense

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![Build](https://img.shields.io/badge/build-passing-brightgreen.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=flat&logo=javascript&logoColor=F7DF1E)

> **Look Better, Effortlessly.** An AI-powered personal stylist application that curates personalized, context-aware outfit recommendations based on individual style preferences, body type, and occasion.

---

## 📸 Visuals

![Demo](./assets/demo.gif)

---

## 🔗 Live Links

- **Live Demo**: [AttireSense App](#) *(Placeholder)*
- **Repository**: [GitHub Link](#) *(Placeholder)*

---

## 🚀 Features

- **Personalized Recommendations**: Analyzes a 9-factor user profile (including skin tone, body type, style preferences) to curate precise outfits.
- **AI-Powered Styling Engine**: Seamlessly integrates with the **Google Gemini 2.0 Flash API** to generate dynamic, intelligent fashion advice formatted efficiently in UI cards.
- **Context-Aware Logic**: Intelligently adjusts outfit suggestions based on the specific occasion, climate, and environment.
- **Local State Management**: Securely and persistently stores user profiles and API configurations using browser `LocalStorage`.
- **Clean UI/UX**: Features a custom-built, responsive interface designed completely with Vanilla HTML, CSS, and JS to ensure optimal performance without the overhead of heavy frontend frameworks.

---

## 💻 Tech Stack

### Frontend
- HTML5
- CSS3 (Custom variables, responsive grid/flexbox layouts)
- Vanilla JavaScript (ES6+, DOM manipulation)

### Backend & APIs
- Google Gemini 2.0 Flash API (AI natural language processing and structured response generation)

### Storage
- Browser LocalStorage (Local state management)

---

## 🛠 Installation & Setup

<details>
<summary><strong>Click to expand step-by-step setup instructions</strong></summary>

### Prerequisites
- A static file server (e.g., Python 3, Node.js)
- A Google Gemini API key (can be generated via Google AI Studio)

### Local Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/attiresense.git
   cd attiresense
   ```

2. **Configure Environment Variables:**
   Create a `.env` file based on the provided `.env.example` (if applicable), or simply enter your Gemini API key directly into the application's secure configuration modal upon launch.

3. **Run the Application Locally:**
   This project relies entirely on vanilla web technologies and does not require a complex build step. You can serve it directly:

   Using Python 3:
   ```bash
   python3 -m http.server 3000
   ```
   *or* using Node.js:
   ```bash
   npx serve .
   ```

4. **Access the Application:**
   Open your browser and navigate to `http://localhost:3000`.

</details>

---

## 🏗 Architecture / How it Works

AttireSense operates entirely client-side, making it highly responsive and lightweight:

1. **User Onboarding & Profiling**: The user fills out a comprehensive 9-factor profile, which is serialized and saved directly to the browser's `LocalStorage`.
2. **Dynamic Prompt Construction**: When a recommendation is requested, the application constructs a tailored, highly specific prompt combining the user's local profile and current context.
3. **Data Fetching via AI**: The prompt is sent via a REST call to the **Google Gemini 2.0 Flash API**.
4. **Parsing & Rendering**: The AI response is parsed from markdown or text and beautifully rendered in the DOM using Vanilla JavaScript, presenting a cohesive outfit with color-matching and style tips on an intuitive card UI.

---

## 🌟 Technical Highlights & Learnings

- **Zero-Dependency Architecture**: Built completely without frontend frameworks like React or Vue. This project enforced a deep, fundamental understanding of raw DOM manipulation, vanilla state management, and scalable custom CSS styling.
- **Advanced Prompt Engineering**: Developed robust prompt templates for the Gemini API to ensure consistent, structured, and high-quality responses. I designed the AI instructions to consistently return data matching the UI card structure for seamless parsing.
- **Client-Side Storage Security**: Implemented secure, persistent storage of sensitive user preferences and API keys purely in the browser without requiring a dedicated backend database.
- **Dynamic Content Rendering**: Handled edge cases of AI-generated content by writing a custom markdown-lite parser in JavaScript, ensuring smooth and safe rendering of structured clothing recommendations.

---

## 📬 Contact

- **LinkedIn**: [Your LinkedIn Profile](https://linkedin.com/in/yourprofile)
- **Portfolio**: [Your Portfolio Website](https://yourportfolio.com)
- **Email**: your.email@example.com

---
*Look Better, Effortlessly.*