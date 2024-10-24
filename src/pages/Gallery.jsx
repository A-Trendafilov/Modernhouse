import React, { lazy, Suspense } from "react";
import { Box, Typography, CircularProgress } from "@mui/material"; // Import necessary MUI components

// Lazy load the ImgGallery component
const ImgGallery = lazy(() => import("../components/Gallery/ImgGallery"));

const Gallery = () => {
  return (
    <Box
      className="gallery-page"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh", // Full viewport height
        bgcolor: "transparent", // Use theme's background color
        padding: 0, // Remove padding to allow full width
        width: "100%", // Ensure full width
      }}
    >
      <Suspense
        fallback={
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100vh",
              bgcolor: "transparent",
            }}
          >
            <CircularProgress /> {/* Show a loading spinner */}
          </Box>
        }
      >
        <ImgGallery />
      </Suspense>
    </Box>
  );
};

export default Gallery;
