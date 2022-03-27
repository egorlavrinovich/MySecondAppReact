import React from "react";
import styl from "./Buton.module.css";

const Buton = ({ children, ...props }) => {
  return (
    <button {...props} className={styl.button}>
      {children}
    </button>
  );
};

export default Buton;
