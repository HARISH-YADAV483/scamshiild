# ScamShield - Scam Detection and Prevention Platform

A comprehensive React-based platform for detecting, analyzing, and preventing scams. Features include scam search, screenshot analysis, phishing simulation, blog management, and more.

## 🚀 Quick Start

### Development Mode
```bash
npm install
npm run dev
```

### Production Build
```bash
npm install
npm run build
node server.js
```

## 🖥️ Render Deployment

### Build Command
```bash
npm install && npm run build
```

### Start Command
```bash
node server.js
```

### Environment Variables
Add these in Render's Environment Variables dashboard:

| Key | Value |
|-----|-------|
| `VITE_API_URL` | Your backend URL (e.g., `https://your-backend.onrender.com`) |
| `MONGODB_URI` | MongoDB connection string (e.g., `mongodb+srv://username:password@cluster.mongodb.net/bhi`) |

**Important:** After setting `VITE_API_URL`, rebuild your frontend for changes to take effect.

## 📦 Tech Stack

- **Frontend**: React 19, Vite
- **Routing**: React Router DOM
- **API**: Axios
- **ML/AI**: TensorFlow.js (MobileNet)
- **OCR**: Tesseract.js
- **Server**: Express 5

## 📁 Project Structure

```
src/
├── components/     # Reusable components
├── pages/          # Page components
│   ├── admin/      # Admin dashboard
│   ├── Blog.jsx
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── PhishingSimulator.jsx
│   ├── ReportScam.jsx
│   ├── ScamSearch.jsx
│   ├── ScreenshotAnalyzer.jsx
│   └── ...
├── services/       # API services
├── styles/         # CSS styles
├── utils/          # Utility functions
└── data/           # Static data
```

## 🎯 Features

- 🔍 Scam Search & Detection
- 📸 Screenshot Analysis (ML + OCR)
- 🎣 Phishing Simulation
- 📝 Blog Management
- 👥 User Authentication
- 🛡️ Admin Dashboard
- 🏆 Leaderboard
- 🔐 Password Tools

## 📄 License

MIT

