import { useState, useEffect, useCallback } from "react";

export const useWindowDimensions = () => {
  const getWindowDimensions = useCallback(() => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }, []);

  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    setWindowDimensions(getWindowDimensions());

    const onResize = () => {
      setWindowDimensions(getWindowDimensions());
    };
    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, [getWindowDimensions]);

  return windowDimensions;
};
