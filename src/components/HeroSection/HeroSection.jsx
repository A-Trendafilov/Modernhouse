// src/components/HeroSection/HeroSection.jsx
import React from "react";
import { Box } from "@mui/material";
import HeroSlider from "./HeroSlider"; // Import HeroSlider

const HeroSection = () => {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        width: "100%",
        height: "100vh",
      }}
    >
      <HeroSlider />
    </Box>
  );
};

export default HeroSection;
