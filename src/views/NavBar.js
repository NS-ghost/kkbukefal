import React from "react";
import NavButton from "../components/NavButtons";
import logo from "../utils/pictures/newLogo.png";
import "../styles/navBar.css";

const NavBar = (props) => {
  return (
    <div className="navBarLayout">
      <div className="left-side">
        <img
          src={logo}
          style={{ height: "230px", width: "80%" }}
          alt="logo"
        ></img>
      </div>
      <div className="right-side">
        <NavButton title="Деда Мраз" mobile={props.mobile} />
        <NavButton title="Венчања" mobile={props.mobile} />
        <NavButton title="Јахање" mobile={props.mobile} />
        <NavButton title="Наши фијакери" mobile={props.mobile} />
        <NavButton title="Наши коњи" mobile={props.mobile} />
        <NavButton title="О нама" mobile={props.mobile} />
      </div>
    </div>
  );
};

export default NavBar;
