import React from "react";

const MediumIcon = ({fill}) => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.64062 1.64062V28.3594H28.3594V1.64062H1.64062ZM23.8377 7.97109L22.4045 9.34512C22.3439 9.39134 22.2971 9.45318 22.269 9.52399C22.241 9.5948 22.2327 9.67192 22.2451 9.74707V19.8416C22.2193 19.9945 22.2809 20.1498 22.4045 20.2436L23.8037 21.6176V21.9193H16.7654V21.6176L18.215 20.2102C18.3574 20.0678 18.3574 20.0256 18.3574 19.8082V11.649L14.3268 21.8859H13.7818L9.08906 11.649V18.5104C9.0498 18.7986 9.1459 19.0893 9.34863 19.2979L11.2342 21.5848V21.8865H5.88809V21.5848L7.77363 19.2979C7.9752 19.0887 8.06543 18.7963 8.0168 18.5104V10.5762C8.03906 10.3559 7.95527 10.1379 7.79063 9.98965L6.11484 7.97051V7.66875H11.3186L15.341 16.49L18.8771 7.66875H23.8377V7.97109V7.97109Z"
        fill={fill || "var(--main-accent)"}
      />
    </svg>
  );
};

export default MediumIcon;
