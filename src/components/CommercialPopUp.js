import React, { useState } from "react";
import { isMobile } from "react-device-detect";
import "../styles/vendors/modal.css";
import dedaMraz from "../utils/pictures/dedaMraz.gif";

const CustomModal = () => {
  const [isModalOpen, setModalOpen] = useState(true);

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      {!isMobile && isModalOpen && (
        <div className="p-modal-background nowactive" onClick={closeModal}>
          <div className="p-modal active">
            <img className="mraz" src={dedaMraz} alt="dedaMraz" />
            <div className="p-modal-button-container">
              <a href="#" data-p-cancel>
                Новогодишњи Деда Мраз дели радост и код вас! 🎅
              </a>
            </div>
          </div>
        </div>
      )}
      {isMobile && isModalOpen && (
        <div className="p-modal-background nowactive" onClick={closeModal}>
          <div className="p-modal active">
            <img className="mraz" src={dedaMraz} alt="dedaMraz" />
            <div className="p-modal-button-container-mobile">
              <a href="#" data-p-cancel>
                Новогодишњи Деда Мраз дели радост и код вас! 🎅
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomModal;
