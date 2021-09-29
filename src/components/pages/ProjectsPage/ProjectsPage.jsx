import React, { useState, useEffect } from "react";
import ProjectDisplay from "../../misc/ProjectDisplay/ProjectDisplay.jsx";
import ProjectsList from "../../misc/ProjectsList/ProjectsList.jsx";
import "./ProjectsPage.styles.css";
import axios from "axios";
import LoadingPage from "../LoadingPage/LoadingPage.jsx";

const ProjectsPage = () => {
  const [projects, setProjects] = useState();

  const getProjects = async () => {
    const githubProjects = await axios.get(
      "https://api.github.com/users/ninaloeterman/repos",
      { headers: { Accept: "application/vnd.github.mercy-preview+json" } }
    );
    setProjects(githubProjects.data);
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
