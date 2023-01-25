import React from "react";
import "./Stylesinput.css";

const Input = ({ label, value, setValue, type = "text" }) => {
  return (
    <div>
      <span>{label}</span>
      <input
        className="loginInput"
        type={type}
        onChange={(e) => setValue(e.target.value)}
        value={value}
      ></input>
    </div>
  );
};

export default Input;
