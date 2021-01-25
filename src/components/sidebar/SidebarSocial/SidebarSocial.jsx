import React from "react";
import IconWrapper from "../../icons/IconWrapper.jsx";
import "./SidebarSocial.styles.css";

const SidebarSocial = () => {
  return (
    <div className="sidebar-social">
      <div className="sidebar-social--hr"></div>
      <IconWrapper type="linkedin" />
      <IconWrapper type="github" />
    </div>
  );
};

export default SidebarSocial;
