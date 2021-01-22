import React from "react";
import IconWrapper from "../icons/IconWrapper.jsx";
import './SidebarSocial.styles.css';


const SidebarSocial = () => {
  return (
    <div>
      <div>-</div>
      <div>
        <IconWrapper type="linkedin" />
      </div>
      <div>
        <IconWrapper type="github" />
      </div>
    </div>
  );
};

export default SidebarSocial;
