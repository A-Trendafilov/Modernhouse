// src/components/Gallery/ImgGallery.jsx
import React, { useState, useMemo } from "react";
import { Container, Typography, Grid2 } from "@mui/material";
import FilterButtons from "./FilterButtons"; // Import the filter buttons component
import ImageCard from "./ImageCard"; // Import the image card component
import ImageLightbox from "./ImageLightbox"; // Import the lightbox component
import { images } from "../../data/galleryImg"; // Ensure your images are defined here

const categories = ["Всички", "Контейнери", "Сглобяеми къщи", "Стоманени къщи"];

const ImgGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("Всички");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages = useMemo(() => {
    return selectedCategory === "Всички"
      ? images
      : images.filter((image) => image.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <Container maxWidth="lg" sx={{ my: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Галерия
      </Typography>

      {/* Filter Buttons */}
      <FilterButtons
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {/* Gallery */}
      <Grid2 container spacing={3} justifyContent="center">
        {filteredImages.map((image, index) => (
          <ImageCard
            key={index}
            image={image}
            onClick={() => setSelectedImage(image.src)}
          />
        ))}
      </Grid2>

      {/* Lightbox Dialog */}
      <ImageLightbox
        selectedImage={selectedImage}
        handleClose={() => setSelectedImage(null)}
      />
    </Container>
  );
};

export default ImgGallery;
