import React, { useContext } from "react";
import { ProjectContext } from "../../../store/ProjectContextProvider.jsx";
import "./ProjectDisplay.styles.css";

const ProjectDisplay = () => {
  const { project } = useContext(ProjectContext);

  console.log(project);

  return (
    <>
      {project.id && (
        <div className="project-display">
          <div>{project.name}</div>
          <a href={project.html_url} target="_blank">
            <button>view source code</button>
          </a>
        </div>
      )}
    </>
  );
};

export default ProjectDisplay;
