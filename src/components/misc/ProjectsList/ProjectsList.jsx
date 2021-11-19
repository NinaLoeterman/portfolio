import React, { useContext } from "react";

import ProjectCard from "../../UI/ProjectCard/ProjectCard.jsx";
import { MobileContext } from "../../../store/MobileContextProvider.jsx";
import "./ProjectsList.styles.css";
import MobileProjectCard from "../../UI/MobileProjectCard/MobileProjectCard.jsx";

const ProjectsList = ({ projects }) => {
  const { isMobile } = useContext(MobileContext);

  return (
    <div className="projects-list">
      {projects &&
        projects.map((project) =>
          isMobile ? (
            <MobileProjectCard key={project.id} project={project} />
          ) : (
            <ProjectCard key={project.id} project={project} />
          )
        )}
    </div>
  );
};

export default ProjectsList;
