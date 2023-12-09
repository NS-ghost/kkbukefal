import React from "react";
import "../styles/container.css";

const Container = (props) => {
  return <div className="defaultOverflow overlay">{props.children}</div>;
};

export default Container;
