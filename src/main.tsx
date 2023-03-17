import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Imports the app
 */
import { App } from "./App";

/**
 * Imports styles
 */
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
