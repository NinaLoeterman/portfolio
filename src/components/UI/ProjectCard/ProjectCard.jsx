import React, { useContext, useEffect } from "react";
import { ProjectContextFunctions } from "../../../store/ProjectContextProvider.jsx";
import "./ProjectCard.styles.css";
import ProjectTag from './ProjectTag/ProjectTag.jsx';

const ProjectCard = ({ project }) => {
  const { setProject } = useContext(ProjectContextFunctions);

  const presentProject = () => {
    setProject(project);
  };

  useEffect(() => {
    console.log(project);
  }, []);

  return (
    <div className="project-card" onMouseOver={presentProject}>
      <div className="project-card-inner">
        <span className="project-card-title">{project.name}</span>
        <div className="project-card-topics">
          {project.topics.map((topic) => (
            <ProjectTag title={topic}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
