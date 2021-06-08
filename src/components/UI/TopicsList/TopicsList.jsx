import React from "react";
import ProjectTag from "../ProjectCard/ProjectTag/ProjectTag.jsx";
import "./TopicsList.css";

const TopicsList = ({ topics }) => {
  return (
    <div className="project-card-topics">
      {topics.map((topic) => (
        <ProjectTag key={topic} title={topic} />
      ))}
    </div>
  );
};

export default TopicsList;
