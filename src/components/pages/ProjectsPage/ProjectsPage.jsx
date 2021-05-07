import React from "react";
import ProjectDisplay from "../../misc/ProjectDisplay/ProjectDisplay.jsx";
import ProjectsList from "../../misc/ProjectsList/ProjectsList.jsx";
import "./ProjectsPage.styles.css";

const ProjectsPage = () => {
  return (
    <>
      <ProjectsList />
      <ProjectDisplay />
    </>
  );
};

export default ProjectsPage;
