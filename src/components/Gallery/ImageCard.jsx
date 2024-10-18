// src/components/Gallery/ImageCard.jsx
import React from "react";
import { Card, CardMedia, Box, Typography, Grid2 } from "@mui/material";
import { motion } from "framer-motion";
import LazyLoad from "../LazyLoad";

const ImageCard = ({ image, onClick }) => {
  return (
    <Grid2 item xs={12} sm={6} md={4} lg={3}>
      <LazyLoad>
        <Card
          onClick={onClick}
          component={motion.div}
          whileHover={{ scale: 1.1 }}
          sx={{
            cursor: "pointer",
            boxShadow: 10,
            height: 320, // Set a fixed height for uniformity
            width: 320, // Make the card responsive
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
            <Typography variant="body2" color="textSecondary" align="center">
              {image.title}
            </Typography>
          </Box>
        </Card>
      </LazyLoad>
    </Grid2>
  );
};

export default ImageCard;
