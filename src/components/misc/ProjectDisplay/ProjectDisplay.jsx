import React, { useContext } from "react";
import { ProjectContext } from "../../../store/ProjectContextProvider.jsx";
import ProjectGif from "../../UI/ProjectGif/ProjectGif.jsx";
import TopicsList from "../../UI/TopicsList/TopicsList.jsx";
import "./ProjectDisplay.styles.css";

const ProjectDisplay = () => {
  const { currentProject } = useContext(ProjectContext);

  return (
    <>
      {currentProject.id && (
        <div className="project-display">
          <div className="project-display-name">{currentProject.name}</div>
          <TopicsList size="large" topics={currentProject.topics} />
          {currentProject.homepage && <ProjectGif project={currentProject} />}
        </div>
      )}
    </>
  );
};

export default ProjectDisplay;
