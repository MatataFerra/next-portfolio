import { useEffect, useState } from "react";

export const useDevice = () => {
  const [device, setDevice] = useState("desktop");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 767) {
        return setDevice("mobile");
      }
      return setDevice("desktop");
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return device;
};
