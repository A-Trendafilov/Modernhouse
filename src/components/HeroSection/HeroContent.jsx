// src/components/HeroSection/HeroContent.jsx
import React from "react";
import { Box, Typography, Button, useTheme } from "@mui/material";

const HeroContent = ({ title, description }) => {
  const theme = useTheme();

  // Define styles for the HeroContent
  const styles = {
    container: {
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
    },
    title: {
      variant: "h3",
      gutterBottom: true,
      sx: {
        fontSize: { xs: "1.5rem", sm: "2rem", md: "3rem" },
      },
    },
    description: {
      variant: "h5",
      gutterBottom: true,
      sx: {
        fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
      },
    },
    button: {
      variant: "contained",
      color: "primary",
      // Change here: Use aria-label instead of ariaLabel
      "aria-label": `Learn more about ${title}`,
      sx: {
        marginTop: theme.spacing(2),
        backgroundColor: theme.palette.accent.red,
        "&:hover": {
          backgroundColor: theme.palette.accent.dark,
        },
      },
    },
  };

  return (
    <Box sx={styles.container}>
      <Typography {...styles.title}>{title}</Typography>
      <Typography {...styles.description}>{description}</Typography>
      <Button {...styles.button}>Learn More</Button>
    </Box>
  );
};

export default HeroContent;
