import React, { useState, useMemo } from "react";
import { Container, Typography, Grid2, useTheme } from "@mui/material";
import FilterButtons from "./FilterButtons"; // Import the filter buttons component
import ImageCard from "./ImageCard"; // Import the image card component
import ImageLightbox from "./ImageLightbox"; // Import the lightbox component
import { images } from "../../data/galleryImg"; // Ensure your images are defined here

const categories = ["Всички", "Контейнери", "Сглобяеми къщи", "Стоманени къщи"];

const ImgGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("Всички");
  const [selectedImage, setSelectedImage] = useState(null);
  const theme = useTheme(); // Get the theme object for styles

  const filteredImages = useMemo(() => {
    return selectedCategory === "Всички"
      ? images
      : images.filter((image) => image.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <Container
      maxWidth={false} // Remove maxWidth to allow full-width
      sx={{
        my: 4,
        bgcolor: theme.palette.background.paper,
        borderRadius: 2,
        padding: 2,
        width: "100%", // Ensure it takes full width
      }}
    >
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        color={theme.palette.text.primary}
      >
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
