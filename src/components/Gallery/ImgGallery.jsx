import React, { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { images } from "../../data/galleryImg";
import LazyLoad from "../LazyLoad";
import {
  Container,
  Button,
  Box,
  Card,
  CardMedia,
  Typography,
  Dialog,
  useMediaQuery,
  useTheme,
  Grid,
} from "@mui/material"; // Import Grid from Material-UI

const categories = ["Всички", "Контейнери", "Сглобяеми къщи", "Стоманени къщи"];

const ImgGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("Всички");
  const [selectedImage, setSelectedImage] = useState(null);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm")); // Detect if the screen is small

  const filteredImages = useMemo(() => {
    return selectedCategory === "Всички"
      ? images
      : images.filter((image) => image.category === selectedCategory);
  }, [selectedCategory]);

  const handleImageClick = useCallback((src) => {
    setSelectedImage(src);
  }, []);

  const handleClose = useCallback(() => {
    setSelectedImage(null);
  }, []);

  return (
    <Container maxWidth="lg" sx={{ my: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Галерия
      </Typography>

      {/* Filter Buttons */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          mb: 4,
          gap: 1, // Add space between buttons
        }}
      >
        {categories.map((category) => (
          <Button
            key={category}
            onClick={() => setSelectedCategory(category)}
            variant={selectedCategory === category ? "contained" : "outlined"}
            sx={{ mx: 1, minWidth: 180 }} // Set a minWidth for better appearance
          >
            {category}
          </Button>
        ))}
      </Box>

      {/* Gallery */}
      <Grid container spacing={3} justifyContent="center">
        <AnimatePresence>
          {filteredImages.map((image, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <LazyLoad>
                <Card
                  onClick={() => handleImageClick(image.src)}
                  component={motion.div}
                  whileHover={{ scale: 1.1 }}
                  sx={{
                    cursor: "pointer",
                    boxShadow: 10,
                    height: 320, // Set a fixed height for uniformity
                    width: "100%", // Make the card responsive
                    maxWidth: 320, // Set a maximum width
                  }}
                >
                  <CardMedia
                    component="img"
                    image={image.src}
                    alt={image.title}
                    sx={{
                      height: "80%", // Fill the card height
                      width: "100%", // Fill the card width
                      objectFit: "cover", // Maintain aspect ratio
                    }}
                  />
                  <Box sx={{ p: 2 }}>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      align="center"
                    >
                      {image.title}
                    </Typography>
                  </Box>
                </Card>
              </LazyLoad>
            </Grid>
          ))}
        </AnimatePresence>
      </Grid>

      {/* Lightbox Dialog */}
      {selectedImage && (
        <Dialog
          open={Boolean(selectedImage)}
          onClose={handleClose}
          maxWidth="md" // Optionally set a maxWidth
          fullWidth // Ensure the dialog takes up the full width
          fullScreen={fullScreen} // Set the dialog to full screen on mobile
          PaperProps={{
            sx: {
              backgroundColor: "rgba(0, 0, 0, 0.9)", // Slightly darker background
              boxShadow: "none",
              overflow: "hidden",
              borderRadius: "10px",
            },
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }} // Center the image
          >
            <img
              src={selectedImage}
              alt="Selected"
              style={{
                maxWidth: "100%", // Allow the image to occupy more width
                maxHeight: "90vh", // Keep a reasonable height
                display: "block",
                margin: "auto",
                borderRadius: "10px",
              }}
            />
          </motion.div>
        </Dialog>
      )}
    </Container>
  );
};

export default ImgGallery;
