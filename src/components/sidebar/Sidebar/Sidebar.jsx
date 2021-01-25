import React from "react";
import SidebarTitle from "../SidebarTitle/SidebarTitle.jsx";
import SidebarLinks from "../SidebarLinks/SidebarLinks.jsx";
import SidebarSocial from "../SidebarSocial/SidebarSocial.jsx";
import "./Sidebar.styles.css";

const Sidebar = () => {
  return (
    <div className={"sidebar"}>
      <SidebarTitle />
      <SidebarLinks />
      <SidebarSocial />
    </div>
  );
};

export default Sidebar;
