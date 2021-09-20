import React from "react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div>
      <Link
        to={process.env.PUBLIC_URL + "/resume.pdf"}
        target="_blank"
        download
      >
        download me
      </Link>
    </div>
  );
};

export default AboutPage;
