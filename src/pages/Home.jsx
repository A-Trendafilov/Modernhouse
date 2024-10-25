import React from "react";
import HeroSection from "../components/HeroSection/HeroSection"; // Import HeroSection
import { Box } from "@mui/material";

const Home = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        bgcolor: "transparent",
      }}
    >
      <HeroSection /> {/* Check if HeroSection displays correctly */}
    </Box>
  );
};

export default Home;
