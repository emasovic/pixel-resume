import { useEffect, useState } from "react";

export const useWarning = () => {
  const [isWarningVisible, setIsWarningVisible] = useState(false);

  const checkScreenSize = () => {
    if (window.innerWidth < 1366) {
      setIsWarningVisible(true);
    } else {
      setIsWarningVisible(false);
    }
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return { isWarningVisible };
};
