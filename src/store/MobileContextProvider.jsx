import React, { createContext, useState, useEffect, useMemo } from "react";

export const MobileContext = createContext();

export const MobileContextProvider = ({ children }) => {
  const [isMobile, setIsMobile] = useState(Boolean);
  const [width, setWidth] = useState(window.innerWidth);

  const onResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    setIsMobile(width <= 768);
  }, [width]);

  const mobileContext = useMemo(() => ({ isMobile }), [isMobile]);

  return (
    <MobileContext.Provider value={mobileContext}>
      {children}
    </MobileContext.Provider>
  );
};
