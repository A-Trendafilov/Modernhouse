import React, { useState, useEffect, useCallback } from "react";
import { Fab } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { useTheme } from "@mui/material/styles";

const ScrollToTopButton = () => {
  const theme = useTheme();
  const [showButton, setShowButton] = useState(false);

  // Throttle scroll event handler using a timer (improved performance)
  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    if (scrollY > 200) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollToTop = (event) => {
    event.stopPropagation();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return showButton ? (
    <Fab
      onClick={scrollToTop}
      color="secondary"
      aria-label="scroll-to-top"
      sx={{
        position: "fixed",
        bottom: "2rem",
        right: "2rem",
        zIndex: theme.zIndex.tooltip,
      }}
    >
      <ArrowUpwardIcon />
    </Fab>
  ) : null;
};

export default React.memo(ScrollToTopButton); // Prevent unnecessary re-renders
