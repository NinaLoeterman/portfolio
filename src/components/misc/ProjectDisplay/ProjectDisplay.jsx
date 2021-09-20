import React, { useContext } from "react";
import { ProjectContext } from "../../../store/ProjectContextProvider.jsx";
import ProjectGif from '../../UI/ProjectGif/ProjectGif.jsx';
import TopicsList from "../../UI/TopicsList/TopicsList.jsx";
import "./ProjectDisplay.styles.css";

const ProjectDisplay = () => {
  const { project } = useContext(ProjectContext);

  return (
    <>
      {project.id && (
        <div className="project-display">
          <div className="project-display-name">{project.name}</div>
          <TopicsList size="large" topics={project.topics} />
          {project.homepage && (
            <ProjectGif project={project}/>
          )}
        </div>
      )}
    </>
  );
};

export default ProjectDisplay;
