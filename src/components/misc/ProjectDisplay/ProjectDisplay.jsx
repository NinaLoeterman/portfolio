import React, { useContext, useEffect } from "react";
import { ProjectContext } from "../../../store/ProjectContextProvider.jsx";
import TopicsList from '../../UI/TopicsList/TopicsList.jsx';
import "./ProjectDisplay.styles.css";

const ProjectDisplay = () => {
  const { project } = useContext(ProjectContext);

  useEffect(() => {
    console.log(project);
  }, [project]);

  return (
    <>
      {project.id && (
        <div className="project-display">
          <div className="project-display-name">{project.name}</div>
          <TopicsList topics={project.topics}/>
          {project.homepage && <img src={project.homepage} />}
          <a href={project.html_url} target="_blank">
            <button>view source code</button>
          </a>
        </div>
      )}
    </>
  );
};

export default ProjectDisplay;
