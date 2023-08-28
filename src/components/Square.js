import React from "react";
import "./Square.css";

const Sqaure = props => {
  return (
    <button
      className="square"
      onClick={() => {
        props.onClick();
      }}
    >
      {props.value}
    </button>
  );
};

export default Sqaure;
