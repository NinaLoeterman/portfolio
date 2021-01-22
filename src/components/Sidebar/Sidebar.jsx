import React from "react";
import useSidebar from "./Sidebar.logic";
import { Link } from "react-router-dom";
import IconWrapper from "../icons/IconWrapper.jsx";
import MainTitle from "../MainTitle/MainTitle.jsx";
import "../Sidebar/Sidebar.styles.css";

const Sidebar = () => {
  const { text } = useSidebar();
  return (
    <div className={"sidebar"}>
      <MainTitle />

      <div>
        <Link to="/about">{text.about}</Link>
        <Link to="/projects">{text.projects}</Link>
        <Link to="/resume">{text.resume}</Link>
        <Link to="/contact">{text.contact}</Link>
      </div>

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
