import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "../styles/index.css";
import "../styles/animation.css";
import VideoPlayer from "../components/VideoPlayer";
import videoSource from "../utils/videos/SaveInsta.App - 2973620080945286897_52718386941.mp4";
import VideoContainer from "../components/VideoContainer";
import NavBar from "../views/NavBar";
import HomeTextField from "../components/HomeTextField";
import ContatUsButtons from "../components/ContatUsButtons";

const HomePage = () => {
  const [showComponents, setShowComponents] = useState(false);

  useEffect(() => {
    // Use setTimeout to delay showing the components
    const timer = setTimeout(() => {
      setShowComponents(true);
    }, 8000); // Delay for 6 seconds (6000 milliseconds)

    // Clean up the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <VideoContainer>
        <VideoPlayer videoSource={videoSource} />
      </VideoContainer>
      {showComponents && (
        <div>
          <NavBar />
          <HomeTextField />
          <ContatUsButtons />
        </div>
      )}
    </div>
  );
};

export default HomePage;
