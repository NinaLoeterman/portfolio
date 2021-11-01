import React, { useState, useEffect } from "react";
import axios from "axios";
import ProjectDisplay from "../../misc/ProjectDisplay/ProjectDisplay.jsx";
import ProjectsList from "../../misc/ProjectsList/ProjectsList.jsx";
import LoadingPage from "../LoadingPage/LoadingPage.jsx";
import "./ProjectsPage.styles.css";

const ProjectsPage = () => {
  const [projects, setProjects] = useState();

  const getProjects = async () => {
    const githubProjects = await axios.get(
      "https://api.github.com/users/ninaloeterman/repos",
      { headers: { Accept: "application/vnd.github.mercy-preview+json" } }
    );
    const projectsToShow = filterProjects(githubProjects.data);
    setProjects(projectsToShow);
  };

  const filterProjects = (projects) => {
    const filteredProjects = projects.filter((project) => project.homepage);
    return filteredProjects;
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div className="projects-page">
      {projects ? (
        <>
          <ProjectsList projects={projects} />
          <ProjectDisplay />
        </>
      ) : (
        <LoadingPage />
      )}
    </div>
  );
};

export default ProjectsPage;
