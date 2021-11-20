import React from "react";
import { Link } from "react-router-dom";
import DownloadButton from "../../UI/DownloadButton/DownloadButton.jsx";
import "./AboutPage.styles.css";

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="about-page-text about-page-intro">👋🏼 Hi, I'm nina.</div>
      <div className="about-page-text">
        I'm a developer interested in meaningful tech solutions to real
        problems. Feel free to look around this site, check out my{" "}
        <Link to="/projects">projects</Link>, and don’t hesitate to be in{" "}
        <Link to="/contact">touch</Link>
        {":)"}
      </div>
      <div className="about-page-text">
        Want to check out my resume? <DownloadButton />
      </div>
    </div>
  );
};

export default AboutPage;
