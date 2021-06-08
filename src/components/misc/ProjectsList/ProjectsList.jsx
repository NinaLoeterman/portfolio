import React, { useState, useEffect } from "react";
import ProjectCard from "../../UI/ProjectCard/ProjectCard.jsx";
import axios from "axios";
import "./ProjectsList.styles.css";

const ProjectsList = () => {
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
    <div className="projects-list">
      {projects &&
        projects.map((project) => (
          <ProjectCard key={project.id} projectblah={project} />
        ))}
    </div>
  );
};

export default ProjectsList;
