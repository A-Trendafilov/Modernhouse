import { Box } from "@mui/material";

import HeroSection from "../components/HeroSection/HeroSection.jsx";
import CardSection from "../components/CardSection.jsx";
import LazyLoad from "../components/utils/LazyLoad.jsx";

const Home = () => {
  return (
    <Box>
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
        <HeroSection />
      </Box>
      <LazyLoad>
        <CardSection />
      </LazyLoad>
    </Box>
  );
};

export default Home;
