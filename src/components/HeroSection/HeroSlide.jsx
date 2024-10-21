// src/components/HeroSection/HeroSlide.jsx
import React from "react";
import { motion } from "framer-motion";
import { Box } from "@mui/material";
import HeroContent from "./HeroContent"; // Import the HeroContent component

const HeroSlide = ({ image }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 1 }}
      style={{ width: "100%", height: "100vh" }} // Ensure motion div covers full area
    >
      <img
        src={image.src}
        alt={image.alt}
        onError={(e) => {
          e.target.src = `${import.meta.env.BASE_URL}/assets/herosection/2-store-house.webp`; // Fallback image
        }}
        style={{
          width: "100%",
          height: "100vh",
          objectFit: "cover",
          filter: "brightness(0.8)",
        }}
      />
      <HeroContent title={image.title} description={image.description} />
    </motion.div>
  );
};

export default HeroSlide;
