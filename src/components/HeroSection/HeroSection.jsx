import { Box } from "@mui/material";

import HeroSlider from "./HeroSlider.jsx"; // Import HeroSlider

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
