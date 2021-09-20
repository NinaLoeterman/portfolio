import React from "react";
import './ProjectGif.styles.css';

const ProjectGif = ({ project }) => {
  return (
    <div className="project-gif">
      <img
        alt="github-gif"
        className="project-gif-image"
        src={project.homepage}
      />
      <div className="project-gif-overlay">
        <a
          className="project-gif-view-source"
          href={project.html_url}
          target="_blank"
          rel="noreferrer"
        >
          View Source Code
        </a>
      </div>
    </div>
  );
};

export default ProjectGif;
