import React from "react";
import './SidebarTitle.styles.css';

const SidebarTitle = () => {
  const text = {
    name: "nina loeterman",
    title: "developer",
    description:
      "front end and full stack. in my previous life, im a classical violist",
  };
  return (
    <div className="sidebar-title">
      <div className="sidebar-title--name" >{text.name}</div>
      <div className="sidebar-title--title">{text.title}</div>
      <div className="sidebar-title--description">{text.description}</div>
    </div>
  );
};

export default SidebarTitle;
