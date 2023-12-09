import React from "react";
import "../styles/index.css";
import "../styles/animation.css";
import VideoPlayer from "../components/VideoPlayer";
import videoSource from "../utils/videos/SaveInsta.App - 2973620080945286897_52718386941.mp4";
import VideoContainer from "../components/VideoContainer";
import NavBar from "../views/NavBar";
import HomeTextField from "../components/HomeTextField";
import ContatUsButtons from "../components/ContatUsButtons";
import CommercialPopUp from "../components/CommercialPopUp";

const HomePageMobile = () => {
  return (
    <div>
      <VideoContainer>
        <VideoPlayer videoSource={videoSource} />
      </VideoContainer>
      <NavBar mobile={true} />
      <HomeTextField mobile={true} />
      <ContatUsButtons mobile={true} />
      <CommercialPopUp />
    </div>
  );
};

export default HomePageMobile;
