import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LazyLoad from "../LazyLoad";
import { Box, Typography, Button } from "@mui/material";
import { heroSectionImg } from "../../data/heroSectionImg";

const HeroSection = () => {
  const settings = {
    dots: false, // Disable navigation dots
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
  };

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        width: "100%",
        height: "100vh", // Full viewport height
      }}
    >
      <Slider {...settings} className="hero-slider">
        {heroSectionImg.map((image, index) => (
          <LazyLoad key={index}>
            <motion.div
              sx={{
                position: "relative",
                width: "100%",
                height: "100%",
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 1 }}
            >
              <img
                src={image.src}
                alt={image.alt}
                onError={(e) => {
                  e.target.src = `${
                    import.meta.env.BASE_URL
                  }/assets/herosection/2-store-house.webp`; // Fallback image on error
                }}
                style={{
                  width: "100%", // Full width
                  height: "100vh", // Full height
                  objectFit: "cover", // Cover the area without distortion
                  filter: "brightness(0.9)", // Adjust brightness for text visibility
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)", // Center the text box
                  textAlign: "center",
                  color: "white",
                  backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
                  padding: { xs: "30px", sm: "40px", md: "50px" },
                  borderRadius: "10px",
                  width: { xs: "80%", sm: "70%", md: "60%", lg: "50%" },
                }}
              >
                <Typography
                  variant="h3"
                  gutterBottom
                  sx={{
                    fontSize: { xs: "1.5rem", sm: "2rem", md: "3rem" },
                  }}
                >
                  {image.title}
                </Typography>
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{
                    fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
                  }}
                >
                  {image.description}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  aria-label={`Learn more about ${image.title}`} // Accessibility
                >
                  Learn More
                </Button>
              </Box>
            </motion.div>
          </LazyLoad>
        ))}
      </Slider>
    </Box>
  );
};

export default HeroSection;
