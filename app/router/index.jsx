import React from "react";
import { Routes, Route } from "react-router-dom";
import Story from "../../pages/Story.jsx";
import Skills from "../../pages/Skills.jsx";
import Portfolio from "../../pages/Portfolio.jsx";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Story />} />
      <Route path="/story" element={<Story />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/portfolio" element={<Portfolio />} />
    </Routes>
  );
}
