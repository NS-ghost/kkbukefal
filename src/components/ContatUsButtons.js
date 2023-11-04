import React, { useState } from "react";
import { isMobile } from "react-device-detect";
import "../styles/contatUsButtons.css";
import "../styles/vendors/buttons.css";
import "../styles/animation.css";
import { buttonString } from "../strings/HomePageStr";
import phoneCall from "../utils/svg/phone-call-alt.svg";

const ContatUsButtons = React.forwardRef((props, overlayRef) => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    if (isMobile) {
      window.location.href = "tel:066431114";
    } else {
      setShowPopup(!showPopup);
    }
  };

  return (
    <div className={`${props.mobile ? "mobile-" : ""}positonOfBtn section`}>
      <a ref={overlayRef} className="p-btn p-btn-round" onClick={togglePopup}>
        {buttonString}
        <img
          src={phoneCall}
          alt="phone"
          style={{ width: "12px", height: "12px", marginLeft: "5px" }}
        />
      </a>
      {showPopup && (
        <div className="popup-container" onClick={togglePopup}>
          <div className="popup-content">Телефон: +381 66 431114</div>
        </div>
      )}
    </div>
  );
});

export default ContatUsButtons;
