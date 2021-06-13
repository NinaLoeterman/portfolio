import React from "react";
import ProjectTag from "../ProjectCard/ProjectTag/ProjectTag.jsx";
import "./TopicsList.css";

const TopicsList = ({ topics, size }) => {
  return (
    <div className={`topics-list topics-list-${size}`}>
      {topics.map((topic) => (
        <ProjectTag key={topic} title={topic} />
      ))}
    </div>
  );
};

export default TopicsList;
