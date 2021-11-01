import React from "react";
import { Link } from "react-router-dom";
import "./DownloadButton.styles.css";

const DownloadButton = () => {
  return (
    <Link
      className="download-button-link"
      to={process.env.PUBLIC_URL + "/resume.pdf"}
      target="_blank"
      download
    >
      <span className="download-button-download">Download it here.</span>
    </Link>
  );
};

export default DownloadButton;
