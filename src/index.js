import React from "react";
import ReactDOM from "react-dom/client";
import { isMobile } from "react-device-detect";
import "./styles/index.css";
import "./styles/animation.css";
import reportWebVitals from "./reportWebVitals";
import HomePageMobile from "./pages/HomePageMobile";
import HomePage from "./pages/HomePage";

if (isMobile || window.innerWidth < 850) {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <HomePageMobile />
    </React.StrictMode>
  );
} else {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <HomePage />
    </React.StrictMode>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
