import React from "react";
import "./Stylesinput.css";

const Button = ({
  type = "secondary",
  size = "md",
  text = "Submit",
  handleClick,
}) => {
  return (
    <div onClick={handleClick} className="myButton">
      {text}
    </div>
  );
};

export default Button;
