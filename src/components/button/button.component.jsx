import React from "react";
import "./button.style.scss";

const Button = ({ children, extraClasses, ...otherProps }) => (
  <button className={`${extraClasses} button`} {...otherProps}>
    {children}
  </button>
);

export default Button;
