/**
 * main.jsx
 * - App entry point
 * - Wraps the app in BrowserRouter so routing works site-wide
 */
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";

/**
 * Global CSS architecture:
 * 1) tokens.css     → design variables (colors, spacing, typography)
 * 2) layout.css     → container/section/grid helpers
 * 3) components.css → reusable UI primitives (buttons, cards, badges)
 * 4) global.css     → resets + app shell + navbar/footer (existing)
 */
import "./styles/tokens.css";
import "./styles/layout.css";
import "./styles/components.css";
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
