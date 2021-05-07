import React, { useState, useEffect } from "react";
import ProjectCard from "../../UI/ProjectCard/ProjectCard.jsx";
import ProjectDisplay from "../../misc/ProjectDisplay/ProjectDisplay.jsx";
import axios from "axios";
import "./ProjectsPage.styles.css";

const ProjectsPage = () => {
  const [projects, setProjects] = useState();

  const getProjects = async () => {
    const githubProjects = await axios.get(
      "https://api.github.com/users/ninaloeterman/repos"
    );
    setProjects(githubProjects.data);
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <>
      <div className="project-page">
        {projects &&
          projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
      </div>
      <ProjectDisplay />
    </>
  );
};

export default ProjectsPage;
