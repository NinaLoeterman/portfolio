import React, { useContext } from "react";
import { ProjectContext } from "../../../store/ProjectContextProvider.jsx";
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
            <div className="image-container">
              <img
                alt="github-gif"
                className='project-display-gif'
                src={project.homepage}
              />
              <div className="after">
                <a className="project-display-view-source" href={project.html_url} target="_blank" rel="noreferrer">
                  View Source Code
                </a>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ProjectDisplay;
