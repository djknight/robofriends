import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Card from "./Card";
import cardList from "./cardList";
import { robots } from "./robots";
import App from "./App";
import "tachyons";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <div>
      <cardList robots={robots} />
    </div>
  </React.StrictMode>
);
