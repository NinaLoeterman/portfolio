import React, { useContext } from "react";
import { ProjectContext } from "../../../store/ProjectContextProvider.jsx";

const ProjectDisplay = () => {
  const { project } = useContext(ProjectContext);

  return <div className="project-page-display">{project.name}</div>;
};

export default ProjectDisplay;
