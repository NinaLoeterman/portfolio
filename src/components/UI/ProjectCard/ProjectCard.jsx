import React, { useContext, useState, useEffect } from "react";
import {
  ProjectContext,
  ProjectContextFunctions,
} from "../../../store/ProjectContextProvider.jsx";
import TopicsList from "../TopicsList/TopicsList.jsx";
import "./ProjectCard.styles.css";

const ProjectCard = ({ project }) => {
  const { setProject } = useContext(ProjectContextFunctions);
  const { currentProject } = useContext(ProjectContext);
  const [isActive, setIsActive] = useState();

  const presentProject = () => {
    setProject(project);
  };

  useEffect(() => {
    project.name === currentProject.name
      ? setIsActive(true)
      : setIsActive(false);
  }, [currentProject.name, project.name]);

  return (
    <div
      className={`project-card ${isActive && "isActive"}`}
      onMouseOver={presentProject}
    >
      <div className="project-card-inner">
        <span className="project-card-title">{project.name}</span>
        <TopicsList topics={project.topics} />
      </div>
    </div>
  );
};

export default ProjectCard;
