import React from "react";
import { Link } from "react-router-dom";
import ProjectCard from "../ProjectCard/ProjectCard";
import "./MobileProjectCard.css";

const MobileProjectCard = ({ project }) => {
  return (
    <Link
      className="mobile-project-card"
      to={{ pathname: project.html_url }}
      target="_blank"
    >
      <ProjectCard key={project.id} project={project} />
    </Link>
  );
};

export default MobileProjectCard;
