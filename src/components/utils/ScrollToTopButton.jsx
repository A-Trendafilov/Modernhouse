import { useState, useEffect } from "react";
import { Fab } from "@mui/material"; // Floating Action Button
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      // Use scrollY instead of pageYOffset
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility); // Listen for scroll events
    return () => {
      window.removeEventListener("scroll", toggleVisibility); // Clean up the event listener
    };
  }, []);

  return (
    <Fab
      onClick={scrollToTop}
      color="primary"
      aria-label="scroll to top"
      sx={{
        position: "fixed",
        bottom: 16,
        right: 16,
        display: visible ? "flex" : "none", // Show button only when visible
        transition: "display 0.2s ease-in-out",
      }}
    >
      <KeyboardDoubleArrowUpIcon />
    </Fab>
  );
};

export default ScrollToTopButton;
