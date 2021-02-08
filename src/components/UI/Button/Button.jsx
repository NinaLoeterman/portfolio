import React from "react";
import IconWrapper from "../../icons/IconWrapper";
import './Button.styles.css';

const Button = ({type}) => {
  return <button type={type} className='Button'><IconWrapper type="send" /></button>;
};

export default Button;
