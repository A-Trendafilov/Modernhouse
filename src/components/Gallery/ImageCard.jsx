import React from "react";
import { Card, CardMedia, Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import LazyLoad from "../LazyLoad";
import { useTheme } from "@mui/material/styles"; // Import useTheme

const ImageCard = ({ image, onClick }) => {
  const theme = useTheme(); // Access the theme

  return (
    <LazyLoad>
      <Card
        onClick={onClick}
        component={motion.div}
        whileHover={{ scale: 1.05 }} // Slightly less scaling for smoother transition
        sx={{
          cursor: "pointer",
          boxShadow: 3, // Use a lower shadow value for subtlety
          backgroundColor: theme.palette.background.paper, // Card background color from the theme
          transition: "transform 0.3s", // Smooth transition for hover effect
          borderRadius: theme.shape.borderRadius, // Use theme's border radius
          display: "flex", // Use flexbox for better layout
          flexDirection: "column", // Stack children vertically
          height: "100%", // Allow card to take full height
          width: 320,
        }}
      >
        <CardMedia
          component="img"
          image={image.src}
          alt={image.title}
          sx={{
            height: { xs: "200px", sm: "250px", md: "300px" }, // Responsive height
            width: "100%",
            objectFit: "cover", // Maintain aspect ratio
            borderTopLeftRadius: theme.shape.borderRadius, // Rounded top corners
            borderTopRightRadius: theme.shape.borderRadius,
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

export default ImageCard;
