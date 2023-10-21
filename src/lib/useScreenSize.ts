"use client";

import { useState, useEffect } from "react";

function useScreenSize() {
  const [screenSize, setScreenSize] = useState("");

  const checkScreenSize = () => {
    const width = window.innerWidth;
    if (width < 672) {
      setScreenSize("small");
    } else if (width >= 672 && width < 990) {
      setScreenSize("medium");
    } else {
      setScreenSize("large");
    }
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return screenSize;
}

export default useScreenSize;
