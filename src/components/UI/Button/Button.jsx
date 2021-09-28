import React from "react";
import IconWrapper from "../../icons/IconWrapper";
import "./Button.styles.css";

const Button = ({
  type,
  title = "",
  onClick,
  icon = "",
  large,
  className,
  children,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${className} Button ${large && "Button_large"}`}
    >
      {title && <div>{title}</div>}
      {icon && <IconWrapper type={icon} />}
      {children}
    </button>
  );
};

export default Button;
