import React from "react";
import { useLocation, NavLink } from "react-router-dom";
import "./SidebarLinks.styles.css";

const SidebarLinks = () => {
  let location = useLocation();

  let isCurrentPage = location.pathname;
  console.log("iscurrentpage", isCurrentPage);
  const text = {
    about: "about",
    projects: "projects",
    resume: "resume",
    contact: "contact",
  };

  const linkStyles = "sidebar-links--link semi-bold";
  const activeLinkStyles = "accent-color";

  return (
    <div className="sidebar-links">
      <NavLink
        className={linkStyles}
        activeClassName={activeLinkStyles}
        to="/about"
      >
        {text.about}
      </NavLink>
      <NavLink
        className={linkStyles}
        activeClassName={activeLinkStyles}
        to="/projects"
      >
        {text.projects}
      </NavLink>
      <NavLink
        className={linkStyles}
        activeClassName={activeLinkStyles}
        to="/resume"
      >
        {text.resume}
      </NavLink>
      <NavLink
        className={linkStyles}
        activeClassName={activeLinkStyles}
        to="/contact"
      >
        {text.contact}
      </NavLink>
    </div>
  );
};

export default SidebarLinks;
