// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Story from "./Pages/Story.jsx";
import Portfolio from "./Pages/Portfolio.jsx";
import Skills from "./Pages/Skills.jsx";
import "./App.css"

function App() {
  return (
    <Router basename="/me">
      <div className="terminal">
        {/* 상단 탭 영역 */}
        <div className="tabs">
          <Link to="/">me</Link>
          <Link to="/story">story</Link>
          <Link to="/skills">skills</Link>
          <Link to="/portfolio">portfolio</Link>
        </div>

        {/* 콘텐츠 영역 */}
        <div className="content">
          <Routes>
            <Route path="/" element={<Story />} />
            <Route path="/story" element={<Story />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
        </div>

        {/* 입력 영역 */}
        <div className="input-area">
          <button>+</button>
          <button>🎤</button>
          <button>📷</button>
          <input type="text" placeholder="Type a command..." />
        </div>
      </div>
    </Router>
  );
}

export default App;
