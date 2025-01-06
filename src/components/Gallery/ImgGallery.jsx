import { useState, useMemo, useEffect } from "react";
import {
  Container,
  Typography,
  Box,
  Grid2,
  CircularProgress,
} from "@mui/material";

import { images } from "../../data/galleryImg"; // Ensure this has unique ids
import FilterButtons from "./FilterButtons.jsx";
import ImageCard from "./ImageCard.jsx";
import ImageLightbox from "./ImageLightbox.jsx";

// Categories available for filtering
const categories = ["Всички", "Контейнери", "Сглобяеми къщи", "Стоманени къщи"];

const ImgGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("Всички");
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null);

  // Memoized filtered images based on selected category
  const filteredImages = useMemo(() => {
    return selectedCategory === "Всички"
      ? images
      : images.filter((image) => image.category === selectedCategory);
  }, [selectedCategory]);

  // Simulate image loading with useEffect
  useEffect(() => {
    const loadImages = async () => {
      try {
        // Simulate a network request delay
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    loadImages();
  }, []);

  return (
    <Container
      maxWidth={false}
      sx={{
        my: 4,
        bgcolor: "transparent",
        borderRadius: 2,
        padding: 2,
        width: "100%",
      }}
    >
      <Typography variant="h4" align="center" gutterBottom>
        Галерия
      </Typography>

      <FilterButtons
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {loading ? ( // Show loading state
        <Box sx={{ my: 4, display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </Box>
      ) : error ? (
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
        <Grid2 container spacing={3} justifyContent="center">
          {filteredImages.map((image) => (
            <ImageCard
              key={image.id} // Use a unique identifier from image data
              image={image}
              onClick={() => setSelectedImage(image.src)} // Open lightbox on click
              aria-label={`View ${image.title}`} // Accessibility feature
            />
          ))}
        </Grid2>
      )}

      <ImageLightbox
        selectedImage={selectedImage}
        handleClose={() => setSelectedImage(null)}
      />
    </Container>
  );
};

export default ImgGallery;
