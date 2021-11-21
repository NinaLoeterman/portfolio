import React from "react";
import { Link } from "react-router-dom";
import "./SidebarTitle.styles.css";

const SidebarTitle = () => {
  const text = {
    name: "nina loeterman",
    title: "software developer",
    description: "creative thinker. clean coder. autodidact.",
  };

  return (
    <div className="sidebar-title">
      <Link to="/" className="sidebar-title--name">
        {text.name}
      </Link>
      <div className="sidebar-title--title">{text.title}</div>
      <div className="sidebar-title--description">{text.description}</div>
    </div>
  );
};

export default SidebarTitle;
