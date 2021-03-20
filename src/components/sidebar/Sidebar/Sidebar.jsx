import React from "react";
import SidebarTitle from "../SidebarTitle/SidebarTitle.jsx";
import SidebarLinks from "../SidebarLinks/SidebarLinks.jsx";
import SidebarSocial from "../SidebarSocial/SidebarSocial.jsx";
import "./Sidebar.styles.css";

const Sidebar = () => {
  return (
    <div className={"sidebar"} data-testid="sidebar">
      <div>
        <SidebarTitle />
        <SidebarLinks />
      </div>
      <SidebarSocial />
    </div>
  );
};

export default Sidebar;
