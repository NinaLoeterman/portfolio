import React, { useContext, useState, useEffect } from "react";
import {
  ProjectContext,
  ProjectContextFunctions,
} from "../../../store/ProjectContextProvider.jsx";
import TopicsList from "../TopicsList/TopicsList.jsx";
import "./ProjectCard.styles.css";

const ProjectCard = ({ projectblah }) => {
  const { setProject } = useContext(ProjectContextFunctions);
  const { project } = useContext(ProjectContext);
  const [isActive, setIsActive] = useState();

  const presentProject = () => {
    setProject(projectblah);
  };

  useEffect(() => {
    projectblah.name === project.name ? setIsActive(true) : setIsActive(false);
  }, [project]);

  return (
    <div
      className={`project-card ${isActive && "isActive"}`}
      onMouseOver={presentProject}
    >
      <div className="project-card-inner">
        <span className="project-card-title">{projectblah.name}</span>
        <TopicsList topics={projectblah.topics} />
      </div>
    </div>
  );
};

export default ProjectCard;
