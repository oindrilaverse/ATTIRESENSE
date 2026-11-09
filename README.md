# ✨ AttireSense

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![Build](https://img.shields.io/badge/build-passing-brightgreen.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

> **Look Better, Effortlessly.** An AI-powered personal stylist application that provides personalized outfit recommendations based on style preferences, body type, and occasion.

---

## 📸 Visuals

*(Demo placeholder - A GIF or screenshot demonstrating the outfit generation process will be placed here)*

---

## 🔗 Live Links

- **Live Demo**: [AttireSense App](#) *(Coming Soon)*
- **Repository**: [GitHub Link](#)

---

## 🚀 Features

- **Personalized Recommendations**: Analyzes user profile (skin tone, body type, style preferences) to curate outfits.
- **AI-Powered Styling**: Integrates with Google Gemini 2.0 Flash API to generate dynamic, intelligent fashion advice.
- **Context-Aware**: Adjusts outfit suggestions based on the specific occasion, climate, and time of day.
- **Local State Management**: Securely stores user profiles and API configurations using browser LocalStorage.
- **Clean UI/UX**: Custom-built, responsive interface designed without heavy frontend frameworks for optimal performance.

---

## 💻 Tech Stack

### Languages & Frameworks
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)

### API & Storage
![Gemini AI](https://img.shields.io/badge/Gemini_2.0_Flash-8E75B2?style=for-the-badge&logo=googlebard&logoColor=white)
![LocalStorage](https://img.shields.io/badge/LocalStorage-4A4A55?style=for-the-badge&logo=WebRTC&logoColor=white)

### Tools & Environments
![VS Code](https://img.shields.io/badge/VS_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)
![SQL Plus](https://img.shields.io/badge/SQL_Plus-F80000?style=for-the-badge&logo=oracle&logoColor=white)

---

## 🛠 Installation & Setup

<details>
<summary>Click to expand setup instructions</summary>

### Prerequisites
- A static file server (e.g., Python 3 or Node.js)
- A Google Gemini API key

### Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/attiresense.git
   cd attiresense
   ```

2. **Configure Environment:**
   Create a `.env` file based on the provided `.env.example` (if applicable) or enter your Gemini API key directly into the application's configuration screen upon launch.

3. **Run the Application:**
   This project relies on vanilla web technologies and does not require a build step. You can serve it directly:

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

1. **User Onboarding**: The user fills out a 9-factor profile (body type, style, etc.), which is saved directly to `LocalStorage`.
2. **AI Integration**: When a recommendation is requested (via the chat interface), the application constructs a tailored prompt combining the user's local profile and current context.
3. **Data Fetching**: The prompt is sent via a REST call to the **Google Gemini 2.0 Flash API**.
4. **Rendering**: The AI response is parsed and beautifully rendered in the DOM using Vanilla JavaScript, presenting a cohesive outfit with color-matching and style tips.

---

## 🌟 Technical Highlights & Learnings

- **Zero-Dependency Architecture**: Built completely without frontend frameworks like React or Vue. This enforced a strong understanding of DOM manipulation, vanilla state management, and custom CSS styling.
- **Prompt Engineering**: Developed robust prompt templates for the Gemini API to ensure consistent, structured, and high-quality JSON or text responses tailored to fashion.
- **Client-Side Storage**: Implemented secure, persistent storage of sensitive user preferences and API keys purely in the browser.
- **Tooling Proficiency**: Utilized **Visual Studio Code** for streamlined development and debugging, while managing backend or supplementary data schemas via **SQL Plus** during the design phase.

---

## 📬 Contact

- **Developer**: [Your Name/Handle]
- **Email**: [your.email@example.com]
- **LinkedIn**: [Your LinkedIn Profile]

---
*Look Better, Effortlessly.*