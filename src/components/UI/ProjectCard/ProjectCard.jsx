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
      {project.name}
    </div>
  );
};

export default ProjectCard;
