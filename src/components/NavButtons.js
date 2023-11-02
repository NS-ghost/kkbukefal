import React from "react";
import "../styles/navButton.css";

const NavButton = ({ mobile, title, ...props }) => {
  return <div className={`${mobile ? "mobile-" : ""}btnOutline`}>{title}</div>;
};

export default NavButton;
