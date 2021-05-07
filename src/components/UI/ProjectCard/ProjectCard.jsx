import React, { useContext, useEffect } from "react";
import { ProjectContextFunctions } from "../../../store/ProjectContextProvider.jsx";
import "./ProjectCard.styles.css";

const ProjectCard = ({ project }) => {
  // console.log(ProjectContextFunctions);
  const { setProject } = useContext(ProjectContextFunctions);
  useEffect(() => {
    // console.log(project);
  }, []);

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
