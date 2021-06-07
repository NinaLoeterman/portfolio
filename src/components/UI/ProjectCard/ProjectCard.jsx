import React, { useContext, useEffect } from "react";
import { ProjectContextFunctions } from "../../../store/ProjectContextProvider.jsx";
import "./ProjectCard.styles.css";

const ProjectCard = ({ project }) => {
  const { setProject } = useContext(ProjectContextFunctions);

  const presentProject = () => {
    setProject(project)
  };

  return (
    <div className="project-card" onMouseOver={presentProject}>
      <span className='project-card-title'>{project.name}</span>
    </div>
  );
};

export default ProjectCard;
