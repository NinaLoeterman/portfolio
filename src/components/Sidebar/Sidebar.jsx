import React from "react";
import useSidebar from "./Sidebar.logic";
import { Link } from "react-router-dom";
import IconWrapper from '../icons/IconWrapper.jsx';

const Sidebar = () => {
  const { text } = useSidebar();
  return (
    <div>
      <div>
        <div>{text.name}</div>
        <div>{text.title}</div>
        <div>{text.description}</div>
      </div>

      <div>
        <Link to="/about">{text.about}</Link>
        <Link to="/projects">{text.projects}</Link>
        <Link to="/resume">{text.resume}</Link>
        <Link to="/contact">{text.contact}</Link>
      </div>

      <div>
        <div>-</div>
        <div><IconWrapper type="linkedin"/></div>
        <div><IconWrapper type="github"/></div>
      </div>
    </div>
  );
};

export default Sidebar;
