import { Box } from "@mui/material";

import HeroSection from "../components/HeroSection/HeroSection.jsx";

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
