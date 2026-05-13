// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Portfolio from "./Pages/Portfolio.jsx";
import Skills from "./Pages/Skills.jsx";
import Story from "./Pages/Story.jsx";
import "./styles.css"; // 커서 애니메이션 CSS

function App() {
  return (
    <Router>
      <div style={{
        backgroundColor: "#000",
        color: "#0f0",
        fontFamily: "monospace",
        minHeight: "100vh",
        padding: "20px"
      }}>
        <header style={{ borderBottom: "1px solid #0f0", marginBottom: "20px" }}>
          <h1>
            Marina@Dev-Terminal:~$ 
            <span className="cursor"></span> {/* 깜빡임 커서 */}
          </h1>
          <nav>
            <Link to="/" style={{ margin: "0 10px", color: "#0f0", textDecoration: "none" }}>Home</Link>
            <Link to="/portfolio" style={{ margin: "0 10px", color: "#0f0", textDecoration: "none" }}>Portfolio</Link>
            <Link to="/skills" style={{ margin: "0 10px", color: "#0f0", textDecoration: "none" }}>Skills</Link>
            <Link to="/story" style={{ margin: "0 10px", color: "#0f0", textDecoration: "none" }}>Story</Link>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<h2>Welcome to Marina's Terminal Homepage</h2>} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/story" element={<Story />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
