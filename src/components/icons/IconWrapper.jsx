import React, { useState } from "react";
import GithubIcon from "./GithubIcon";
import LinkedInIcon from "./LinkedInIcon";
import MediumIcon from "./MediumIcon";
import SendIcon from "./SendIcon";
import TagIcon from "./TagIcon.jsx";
import SourceIcon from "./SourceIcon.jsx";
import "./IconWrapper.styles.css";

const IconWrapper = (props) => {
  const [newProps, setNewProps] = useState({ ...props });

  const mapTypeToIcon = {
    github: (props) => <GithubIcon {...props} />,
    linkedin: (props) => <LinkedInIcon {...props} />,
    medium: (props) => <MediumIcon {...props} />,
    send: (props) => <SendIcon {...props} />,
    tag: (props) => <TagIcon {...props} />,
    source: (props) => <SourceIcon {...props} />,
  };

  const toggleHover = (fill) => {
    setNewProps({ ...props, fill });
  };

  return mapTypeToIcon[props.type] ? (
    <div
      onMouseOver={() => toggleHover("var(--main-hover")}
      onMouseOut={() => toggleHover("var(--main-accent")}
      className="icon-wrapper"
    >
      {mapTypeToIcon[newProps.type](newProps)}
    </div>
  ) : (
    <div>non existant icon type</div>
  );
};

export default IconWrapper;
