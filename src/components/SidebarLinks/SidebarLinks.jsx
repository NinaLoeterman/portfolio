import React from "react";
import { Link } from "react-router-dom";
import './SidebarLinks.styles.css';

const SidebarLinks = () => {
  const text = {
    about: "about",
    projects: "projects",
    resume: "resume",
    contact: "contact",
  };

  return (
    <div className="sidebar-links">
      <Link to="/about">{text.about}</Link>
      <Link to="/projects">{text.projects}</Link>
      <Link to="/resume">{text.resume}</Link>
      <Link to="/contact">{text.contact}</Link>
    </div>
  );
};

export default SidebarLinks;
