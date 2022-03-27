import React from "react";
import styl from "./Input.module.css";

const Input = (props) => {
  return <input className={styl.input} {...props} />;
};

export default Input;
