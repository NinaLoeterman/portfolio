import React from "react";
import IconWrapper from "../../icons/IconWrapper";
import "./Button.styles.css";

const Button = ({ type, title = "", onClick, icon="" }) => {
  return (
    <button
      data-testid="contact-submit"
      onClick={onClick}
      type={type}
      className="Button"
    >
      {title && <div>{title}</div>}
      <IconWrapper type={icon} />
    </button>
  );
};

export default Button;
