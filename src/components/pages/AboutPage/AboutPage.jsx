import React from "react";
import { Link } from "react-router-dom";
import Button from "../../UI/Button/Button.jsx";
import DownloadButton from "../../UI/DownloadButton/DownloadButton.jsx";
import "./AboutPage.styles.css";

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="about-page-text about-page-intro">hi, im nina 👋🏼</div>
      <div className="about-page-text">
        Im a developer interested in meaningful tech solutions to real problems.
        Feel free to look around this site, check out my{" "}
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
