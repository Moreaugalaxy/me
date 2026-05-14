import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/globals.css";
import "./themes/base.css";
import "./themes/crt.css";

if (typeof document !== "undefined") {
  document.documentElement.dataset.theme = "crt";
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);