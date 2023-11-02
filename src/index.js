import React from "react";
import ReactDOM from "react-dom/client";
import { isMobile } from "react-device-detect";
import "./styles/index.css";
import reportWebVitals from "./reportWebVitals";
import VideoPlayer from "./components/VideoPlayer";
import videoSource from "./utils/videos/SaveInsta.App - 2973620080945286897_52718386941.mp4";
import VideoContainer from "./components/VideoContainer";
import NavBar from "./views/NavBar";

if (isMobile) {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <VideoContainer>
        <VideoPlayer videoSource={videoSource} />
      </VideoContainer>
      {/* <NavBar mobile={true} /> */}
      <div>Coming soon...</div>
    </React.StrictMode>
  );
} else {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <VideoContainer>
        <VideoPlayer videoSource={videoSource} />
      </VideoContainer>
      <NavBar mobile={false} />
      <div>Coming soon...</div>
    </React.StrictMode>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
