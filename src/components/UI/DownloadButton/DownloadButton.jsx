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
      <div className="download-button">
        <span>download</span>
      </div>
    </Link>
  );
};

export default DownloadButton;
