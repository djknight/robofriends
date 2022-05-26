import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { robots } from "./robots";
import App from "./App";
import "tachyons";
import CardList from "./CardList";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <div>
      <CardList robots={robots} />
    </div>
  </React.StrictMode>
);
