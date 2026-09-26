# 🚀 Echo Cat AI — Multi-Model Developer Workspace

Echo Cat AI is a next-generation, high-performance developer workspace designed to streamline interaction across multiple frontier language models (including GPT-5, Claude 3.5 Sonnet, and Gemini 1.5 Pro). Built with speed, developer flow state, and strict privacy in mind, Echo Cat AI delivers a dark-themed, latency-optimized terminal interface for modern software engineering.

🌐 **Live Application:** [https://echo-gpt.vercel.app/](https://echo-gpt.vercel.app/)

---

## 🌟 Key Features

- **Multi-Engine AI Switching:** Instantly swap between GPT-5 Cyber, Claude 3.5 Sonnet, and Gemini 1.5 Pro mid-conversation without losing context.
- **Sub-50ms Streaming Interface:** Edge-optimized WebSocket streaming for seamless, real-time code and text token delivery.
- **Zero Data Retention (ZDR):** High-security mode ensures prompts and code snippets are never cached, logged, or used for model training.
- **Developer-Centric UI/UX:** Built-in syntax highlighting, interactive code blocks, instant copy actions, and custom system prompt presets.
- **Local Workspace Persistence:** Complete chat history stays privately synced in your browser's local storage.
- **Responsive Modular Architecture:** Fully responsive UI engineered with React, Tailwind CSS, and Lucide icons.

---

## 🛠️ Tech Stack

- **Frontend Framework:** React
- **Build Tooling:** Vite
- **Styling & Layout:** Tailwind CSS
- **Iconography:** Lucide React
- **Deployment & Hosting:** Vercel

---

## 📁 Project File Structure

```text
echogpt/
├── src/
│   ├── components/       # Reusable sub-components
│   ├── data.js           # Static configuration & landing content
│   ├── Hero.jsx          # Hero section component
│   ├── Navbar.jsx        # Navigation bar component
│   ├── LandingPage.jsx   # Primary assembly page
│   ├── App.jsx           # Main application router/entry
│   └── main.jsx          # DOM entry point
├── public/               # Static assets & favicon
├── package.json          # Project dependencies & scripts
├── tailwind.config.js    # Styling configuration
└── README.md             # Project documentation
```

---

## 🚀 Getting Started Locally

Follow these steps to set up and run Echo Cat AI on your local machine.

### 1. Prerequisites

Ensure you have Node.js (v18.0 or higher) and npm installed:

```bash
node -v
npm -v
```

### 2. Clone the Repository

```bash
git clone https://github.com/your-username/echo-cat-ai.git
cd echo-cat-ai
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Run the Development Server

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173` (or the URL shown in your terminal).

### 5. Build for Production

```bash
npm run build
```

---

## ☁️ Deployment

This project is continuous-integration-ready for Vercel.

1. Push your code to your GitHub / GitLab repository.
2. Import the project into your Vercel Dashboard.
3. Keep standard build settings:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Deploy! Your app will be live at your designated Vercel domain.

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
