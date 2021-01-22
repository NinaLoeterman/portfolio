import React from "react";

const MainTitle = () => {
  const text = {
    name: "nina loeterman",
    title: "developer",
    description:
      "front end and full stack. in my previous life, im a classical violist",
  };
  return (
    <div>
      <div>{text.name}</div>
      <div>{text.title}</div>
      <div>{text.description}</div>
    </div>
  );
};

export default MainTitle;
