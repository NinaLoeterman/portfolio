import React from "react";
import IconWrapper from "../icons/IconWrapper.jsx";
import SidebarTitle from "../SidebarTitle/SidebarTitle.jsx";
import SidebarLinks from '../SidebarLinks/SidebarLinks.jsx';
import "../Sidebar/Sidebar.styles.css";

const Sidebar = () => {
  return (
    <div className={"sidebar"}>
      <SidebarTitle />
      <SidebarLinks />

      <div>
        <div>-</div>
        <div>
          <IconWrapper type="linkedin" />
        </div>
        <div>
          <IconWrapper type="github" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
