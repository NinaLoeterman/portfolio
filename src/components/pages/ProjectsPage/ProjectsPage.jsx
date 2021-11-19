import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import ProjectDisplay from "../../misc/ProjectDisplay/ProjectDisplay.jsx";
import ProjectsList from "../../misc/ProjectsList/ProjectsList.jsx";
import LoadingPage from "../LoadingPage/LoadingPage.jsx";
import { MobileContext } from "../../../store/MobileContextProvider.jsx";
import "./ProjectsPage.styles.css";

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const { isMobile } = useContext(MobileContext);

  const getProjects = async () => {
    try {
      const githubProjects = await axios.get(
        "https://api.github.com/users/ninaloeterman/repos",
        { headers: { Accept: "application/vnd.github.mercy-preview+json" } }
      );
      const projectsToShow = filterProjects(githubProjects.data);
      setProjects(projectsToShow);
    } catch (e) {
      console.log("error: ", e);
    }
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
          {!isMobile && <ProjectDisplay />}
        </>
      ) : (
        <LoadingPage />
      )}
    </div>
  );
};

export default ProjectsPage;
