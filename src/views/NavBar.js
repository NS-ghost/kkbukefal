import React from "react";
import NavButton from "../components/NavButtons";
import logo from "../utils/pictures/newLogo.png";
import "../styles/navBar.css";
import "../styles/animation.css";

const NavBar = ({ mobile, ...props }) => {
  return (
    <div className={`${mobile ? "mobile-" : ""}navBarLayout`}>
      <div className={`${mobile ? "mobile-" : ""}left-side`}>
        <img
          src={logo}
          style={{ height: "160px", width: "70%" }}
          alt="logo"
        ></img>
      </div>
      <div className={`${mobile ? "mobile-" : ""}right-side section`}></div>
    </div>
  );
};

export default NavBar;
