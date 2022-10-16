import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app/App";

const root = ReactDOM.createRoot(document.getElementById("root"));

// eslint-disable-next-line jest/require-hook
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
