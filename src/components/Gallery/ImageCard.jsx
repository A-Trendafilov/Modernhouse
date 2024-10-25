import React from "react";
import { Card, CardMedia, Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import LazyLoad from "../utils/LazyLoad"; // Ensure LazyLoad is correctly implemented
import PropTypes from "prop-types"; // Import PropTypes
import { useTheme } from "@mui/material/styles";

const ImageCard = ({ image, onClick }) => {
  const theme = useTheme();

  return (
    <LazyLoad>
      <Card
        onClick={onClick}
        component={motion.div}
        whileHover={{ scale: 1.05 }} // Slightly less scaling for smoother transition
        sx={{
          cursor: "pointer",
          boxShadow: 3, // Use a lower shadow value for subtlety
          backgroundColor: "transparent",
          transition: "transform 0.3s",
          borderRadius: theme.shape.borderRadius,
          display: "flex",
          flexDirection: "column",
          height: "100%",
          width: 320,
        }}
        role="button" // Set role for better accessibility
        tabIndex={0} // Make card focusable
        onKeyDown={(e) => {
          // Handle keyboard interaction
          if (e.key === "Enter" || e.key === " ") {
            onClick(); // Trigger onClick on Enter or Space
          }
        }}
      >
        <CardMedia
          component="img"
          image={image.src}
          alt={image.title || "Image"} // Fallback alt text if title is missing
          sx={{
            height: { xs: "200px", sm: "250px", md: "300px" },
            width: "100%",
            objectFit: "cover",
            borderTopLeftRadius: theme.shape.borderRadius,
            borderTopRightRadius: theme.shape.borderRadius,
          }}
          onError={(e) => {
            e.target.onerror = null; // Prevents infinite loop
            e.target.src = "path/to/placeholder-image.jpg"; // Set a placeholder image
          }}
        />
        <Box
          sx={{
            p: 2,
            flexGrow: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="body2" color="text.secondary" align="center">
            {image.title}
          </Typography>
        </Box>
      </Card>
    </LazyLoad>
  );
};

// Prop Types for better type checking
ImageCard.propTypes = {
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    title: PropTypes.string,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageCard;
