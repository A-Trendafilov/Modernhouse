// src/components/HeroSection/HeroContent.jsx
import React from "react";
import { Box, Typography, Button, useTheme } from "@mui/material";

const HeroContent = ({ title, description }) => {
  const theme = useTheme();

  const styles = {
    container: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      textAlign: "center",
      color: theme.palette.common.white,
      backgroundColor: `${theme.palette.grey[900]}${
        theme.palette.action.selectedOpacity * 100
      }`, // Semi-transparent background
      padding: {
        xs: theme.spacing(2),
        sm: theme.spacing(3),
        md: theme.spacing(4),
      },
      borderRadius: theme.shape.borderRadius,
      width: { xs: "80%", sm: "70%", md: "60%", lg: "50%" },
      boxSizing: "border-box",
    },
    title: {
      fontSize: { xs: "1.5rem", sm: "2rem", md: "3rem" },
    },
    description: {
      fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
    },
    button: {
      marginTop: theme.spacing(2),
      "&:hover": {
        backgroundColor: theme.palette.primary.main,
      },
    },
  };

  return (
    <Box sx={styles.container}>
      <Typography variant="h3" gutterBottom sx={styles.title}>
        {title}
      </Typography>
      <Typography variant="h5" gutterBottom sx={styles.description}>
        {description}
      </Typography>
      <Button
        variant="contained"
        aria-label={`Learn more about ${title}`}
        sx={styles.button}
      >
        Learn More
      </Button>
    </Box>
  );
};

export default HeroContent;
