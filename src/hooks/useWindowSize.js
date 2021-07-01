import { useEffect, useState } from "react";

export default function useWindowSize() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    window.addEventListener('resize', onWindowResize);

    return () => window.removeEventListener('resize', onWindowResize);
  }, []);

  function onWindowResize(e) {
    if (e.target.outerWidth > 1000) {
      setIsSmallScreen(false);
    } else {
      setIsSmallScreen(true);
    }
  }

  return isSmallScreen;
}