import React from "react";
import LazyLoad from "../components/LazyLoad"; // Ensure you import LazyLoad
import HeroSection from "../components/HeroSection/HeroSection"; // Import HeroSection
import { Box } from "@mui/material";

// Variants for the lazy loading effect
const homeVariants = {
  hidden: { opacity: 0, translateY: 20 },
  visible: { opacity: 1, translateY: 0 },
};

const Home = () => {
  return (
    <LazyLoad variants={homeVariants}>
      <Box>
        <HeroSection /> {/* Hero section will have its own animations */}
        {/* Other sections can be added here */}
      </Box>
    </LazyLoad>
  );
};

export default Home;
