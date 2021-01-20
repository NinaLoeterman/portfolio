import React from "react";
import GithubIcon from "./GithubIcon";
import LinkedInIcon from "./LinkedInIcon";
import SendIcon from "./SendIcon";

const IconWrapper = (props) => {
  const mapTypeToIcon = {
    github: (props) => <GithubIcon {...props} />,
    linkedin: (props) => <LinkedInIcon {...props} />,
    send: (props) => <SendIcon {...props} />,
  };

  return mapTypeToIcon[props.type] ? (
    <div>{mapTypeToIcon[props.type](props)}</div>
  ) : (
    <div>non existant icon type</div>
  );
};

export default IconWrapper;
