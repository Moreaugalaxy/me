// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Story from "./Pages/Story.jsx";
import Portfolio from "./Pages/Portfolio.jsx";
import Skills from "./Pages/Skills.jsx";
import "./App.css";
import "./styles.css";

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div className="terminal">
        {/* 상단 탭 영역 */}
        <div className="tabs">
          <div className="brand">
            <span>me</span>
            <span className="cursor" aria-hidden="true"></span>
          </div>
          <nav className="tab-links">
            <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>me</NavLink>
            <NavLink to="/story" className={({ isActive }) => (isActive ? "active" : "")}>story</NavLink>
            <NavLink to="/skills" className={({ isActive }) => (isActive ? "active" : "")}>skills</NavLink>
            <NavLink to="/portfolio" className={({ isActive }) => (isActive ? "active" : "")}>portfolio</NavLink>
          </nav>
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
          <button type="button">+</button>
          <button type="button">🎤</button>
          <button type="button">📷</button>
          <input type="text" placeholder="Type a command..." />
        </div>
      </div>
    </Router>
  );
}

export default App;
