import React from "react";
import IconWrapper from "../../icons/IconWrapper";
import "./Button.styles.css";

const Button = ({ type, title = "", onClick, icon = "", large, className }) => {
  return (
    <button onClick={onClick} type={type} className={`${className} Button ${large && 'Button_large'}`}>
      {title && <div>{title}</div>}
      {icon && <IconWrapper type={icon} />}
    </button>
  );
};

export default Button;
