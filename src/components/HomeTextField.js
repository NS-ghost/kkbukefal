import React from "react";
import "../styles/homeTextField.css";
import "../styles/animation.css";
import { descriptionString } from "../strings/HomePageStr";

const HomeTextField = ({ mobile, ...props }) => {
  return (
    <div className={`${mobile ? "mobile-" : ""}descText section`}>
      <div className={`${mobile ? "mobile-" : ""}content`}>
        {descriptionString}
      </div>
    </div>
  );
};

export default HomeTextField;
