// src/App.jsx
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Shell from "./components/layout/Shell.jsx";
import AppRouter from "./app/router/index.jsx";

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Shell>
        <AppRouter />
      </Shell>
    </Router>
  );
}

export default App;
