import React from "react";
import ProjectCard from "../../UI/ProjectCard/ProjectCard.jsx";
import "./ProjectsList.styles.css";

const ProjectsList = ({ projects }) => {
  return (
    <div className="projects-list">
      {projects &&
        projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
    </div>
  );
};

export default ProjectsList;
