import React, { useContext, useEffect } from "react";
import { ProjectContext } from "../../../store/ProjectContextProvider.jsx";
import TopicsList from "../../UI/TopicsList/TopicsList.jsx";
import Button from "../../UI/Button/Button.jsx";
import "./ProjectDisplay.styles.css";

const ProjectDisplay = () => {
  const { project } = useContext(ProjectContext);

  useEffect(() => {
    console.log(project);
  }, [project]);

  const navigate = () => {
    window.open(project.html_url, "_blank");
  };

  return (
    <>
      {project.id && (
        <div className="project-display">
          <div className="project-display-name">{project.name}</div>
          <TopicsList size="large" topics={project.topics} />
          {project.homepage && (
            <img
              alt="github-gif"
              className="project-display-gif"
              src={project.homepage}
            />
          )}
          <Button title="view source code" icon="source" onClick={navigate} />
        </div>
      )}
    </>
  );
};

export default ProjectDisplay;
