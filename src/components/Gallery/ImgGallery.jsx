import React, { useState, useMemo } from "react";
import { Container, Typography, Grid2, useTheme, Box } from "@mui/material";
import FilterButtons from "./FilterButtons";
import ImageCard from "./ImageCard";
import ImageLightbox from "./ImageLightbox";
import { images } from "../../data/galleryImg";

const categories = ["Всички", "Контейнери", "Сглобяеми къщи", "Стоманени къщи"];

const ImgGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("Всички");
  const [selectedImage, setSelectedImage] = useState(null);
  const [error, setError] = useState(null);
  const theme = useTheme();

  const filteredImages = useMemo(() => {
    return selectedCategory === "Всички"
      ? images
      : images.filter((image) => image.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <Container
      maxWidth={false}
      sx={{
        my: 4,
        bgcolor: theme.palette.background.default,
        borderRadius: 2,
        padding: 2,
        width: "100%",
      }}
    >
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        color={theme.palette.accent.red}
      >
        Галерия
      </Typography>

      <FilterButtons
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <Grid2 container spacing={3} justifyContent="center">
        {error ? (
          <Box sx={{ my: 4, color: "red" }}>
            <Typography variant="h6">
              Error loading images: {error.message}
            </Typography>
          </Box>
        ) : filteredImages.length === 0 ? (
          <Typography variant="h6" sx={{ my: 4 }}>
            No images found.
          </Typography>
        ) : (
          filteredImages.map((image, index) => (
            <ImageCard
              key={index}
              image={image}
              onClick={() => setSelectedImage(image.src)}
            />
          ))
        )}
      </Grid2>

      <ImageLightbox
        selectedImage={selectedImage}
        handleClose={() => setSelectedImage(null)}
      />
    </Container>
  );
};

export default ImgGallery;
