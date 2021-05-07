import React, { useState, useEffect, createContext, useRef } from "react";

export const ProjectContext = createContext();
export const ProjectContextFunctions = createContext();

export const ProjectContextProvider = ({ children }) => {
  const [project, setProject] = useState({});

  useEffect(() => {
    console.log(project);
  }, [project]);

  const context = { project };
  const contextFunctions = useRef({ setProject });

  return (
    <ProjectContext.Provider value={context}>
      <ProjectContextFunctions.Provider value={contextFunctions.current}>
        {children}
      </ProjectContextFunctions.Provider>
    </ProjectContext.Provider>
  );
};
