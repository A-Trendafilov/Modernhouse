// src/pages/NotFound.jsx

import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
        bgcolor: "transparent", // Use theme's default background color
        color: "text.primary", // Use theme's primary text color
        padding: 3, // Add some padding for spacing
      }}
    >
      <Typography variant="h2" sx={{ mb: 2 }}>
        404
      </Typography>
      <Typography variant="h5" sx={{ mb: 3 }}>
        Oops! Page Not Found
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        Sorry, the page you are looking for does not exist.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate("/")} // Redirect to home page
        sx={{
          "&:hover": {
            backgroundColor: "primary.dark", // Darker shade on hover
          },
        }}
      >
        Go to Home
      </Button>
    </Box>
  );
};

export default NotFound;
