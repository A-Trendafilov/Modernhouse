// src/components/HeroSection/HeroSection.jsx
import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LazyLoad from "../LazyLoad"; // Import LazyLoad
import "./HeroSection.css";

const backgroundImages = [
  "/assets/herosection/2-store-house.webp",
  "/assets/herosection/construction.webp",
];

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
  };

  return (
    <div className="hero-section">
      <Slider {...settings} className="hero-slider">
        {backgroundImages.map((image, index) => (
          <LazyLoad key={index}>
            {" "}
            {/* Wrap each slide with LazyLoad */}
            <motion.div
              className="slider-image"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 1 }}
            >
              <img src={image} alt={`Slide ${index}`} />
            </motion.div>
          </LazyLoad>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSection;
