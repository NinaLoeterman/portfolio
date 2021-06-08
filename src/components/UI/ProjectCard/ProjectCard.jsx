import React, { useContext, useEffect } from "react";
import { ProjectContextFunctions } from "../../../store/ProjectContextProvider.jsx";
import TopicsList from '../TopicsList/TopicsList.jsx';
import "./ProjectCard.styles.css";
import ProjectTag from './ProjectTag/ProjectTag.jsx';

const ProjectCard = ({ project }) => {
  const { setProject } = useContext(ProjectContextFunctions);

  const presentProject = () => {
    setProject(project);
  };

  return (
    <div className="project-card" onMouseOver={presentProject}>
      <div className="project-card-inner">
        <span className="project-card-title">{project.name}</span>
        <TopicsList topics={project.topics}/>
      </div>
    </div>
  );
};

export default ProjectCard;
