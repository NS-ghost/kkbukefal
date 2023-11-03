import React, { useState } from "react";
import { isMobile } from "react-device-detect";
import "../styles/contatUsButtons.css";
import "../styles/vendors/buttons.css";
import "../styles/animation.css";
import { buttonString } from "../strings/HomePageStr";
import phoneCall from "../utils/svg/phone-call-alt.svg";

const ContatUsButtons = ({ mobile, ...props }) => {
  const [showPhoneNumber, setShowPhoneNumber] = useState(false);

  const handleButtonClick = () => {
    if (isMobile) {
      window.location.href = "tel:066431114";
    } else {
      setShowPhoneNumber(!showPhoneNumber);
      const aTag = document.querySelector(".p-btn.p-btn-round");
      aTag.classList.add("hidden");
    }
  };

  return (
    <div className={`${mobile ? "mobile-" : ""}positonOfBtn section`}>
      <a class="p-btn p-btn-round" onClick={handleButtonClick}>
        {buttonString}
        <img
          src={phoneCall}
          alt="phone"
          style={{ width: "12px", height: "12px", marginLeft: "5px" }}
        />
      </a>
      <p>
        {showPhoneNumber && (
          <p className={`${mobile ? "mobile-" : ""}phonNumberWeb`}>
            Телефон: 066-431114
          </p>
        )}
      </p>
    </div>
  );
};

export default ContatUsButtons;
