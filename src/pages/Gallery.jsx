import { lazy, Suspense } from "react";
import { Box, CircularProgress } from "@mui/material";

const ImgGallery = lazy(() => import("../components/Gallery/ImgGallery.jsx"));

const Gallery = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh", // Full viewport height
        bgcolor: "transparent", // Use theme's background color
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
            <CircularProgress />
          </Box>
        }
      >
        <ImgGallery />
      </Suspense>
    </Box>
  );
};

export default Gallery;
