// src/components/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation(); // Get the current route path

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the route changes
  }, [pathname]); // Re-run when the route (pathname) changes

  return null; // This component doesn't need to render anything
};

export default ScrollToTop;
