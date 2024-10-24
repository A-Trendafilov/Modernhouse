// src/components/HeroSection/HeroContent.jsx
import React from "react";
import { Box, Typography, Button, useTheme } from "@mui/material";

const HeroContent = ({ title, description }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)", // Center the text box
        textAlign: "center",
        color: theme.palette.common.white,
        backgroundColor: `${theme.palette.grey[900]}99`, // Semi-transparent background
        padding: {
          xs: theme.spacing(2),
          sm: theme.spacing(3),
          md: theme.spacing(4),
        },
        borderRadius: theme.shape.borderRadius,
        width: { xs: "80%", sm: "70%", md: "60%", lg: "50%" },
        boxSizing: "border-box",
      }}
    >
      <Typography
        variant="h3"
        gutterBottom
        sx={{
          fontSize: { xs: "1.5rem", sm: "2rem", md: "3rem" },
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="h5"
        gutterBottom
        sx={{
          fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
        }}
      >
        {description}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        aria-label={`Learn more about ${title}`}
        sx={{
          marginTop: theme.spacing(2),
          backgroundColor: theme.palette.accent.red,
          "&:hover": {
            backgroundColor: theme.palette.accent.dark,
          },
        }}
      >
        Learn More
      </Button>
    </Box>
  );
};

export default HeroContent;
