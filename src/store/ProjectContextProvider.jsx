import React, { useState, createContext, useRef } from "react";

export const ProjectContext = createContext();
export const ProjectContextFunctions = createContext();

export const ProjectContextProvider = ({ children }) => {
  const [currentProject, setProject] = useState({});

  const context = { currentProject };
  const contextFunctions = useRef({ setProject });

  return (
    <ProjectContext.Provider value={context}>
      <ProjectContextFunctions.Provider value={contextFunctions.current}>
        {children}
      </ProjectContextFunctions.Provider>
    </ProjectContext.Provider>
  );
};
