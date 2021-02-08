import React from "react";
import IconWrapper from "../../icons/IconWrapper.jsx";
import "./SidebarSocial.styles.css";

const SidebarSocial = () => {
  return (
    <div className="sidebar-social">
      <div className="sidebar-social--hr"></div>
      <a className="sidebar-social--link" href="https://www.linkedin.com/in/nina-loeterman/" target="_blank">
        <IconWrapper type="linkedin" />
      </a>
      <a className="sidebar-social--link" href="https://github.com/NinaLoeterman" target="_blank">
        <IconWrapper type="github" />
      </a>
    </div>
  );
};

export default SidebarSocial;
