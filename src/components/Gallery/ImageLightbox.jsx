import PropTypes from "prop-types";
import { useEffect } from "react";
import { Dialog, useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";

const ImageLightbox = ({ selectedImage, handleClose }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm")); // Check if the screen is small

  // Close the lightbox with the Escape key
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleClose]);

  return (
    <Dialog
      open={Boolean(selectedImage)}
      onClose={handleClose}
      maxWidth={false} // Disable maxWidth to make it truly full screen
      fullWidth
      fullScreen={fullScreen} // Enable fullscreen on mobile
      PaperProps={{
        sx: {
          backgroundColor: "transparent", // Use theme background color
          boxShadow: "none",
          overflow: "hidden",
          borderRadius: 0, // Remove rounding for full screen
          height: "100vh", // Use full height for desktop
          width: "100vw", // Use full width for desktop
        },
      }}
      aria-labelledby="lightbox-image-title" // Add aria-labelledby for accessibility
      aria-describedby="lightbox-image-description" // Add aria-describedby for accessibility
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
          height: "100%", // Ensure it fills the dialog
        }}
      >
        <img
          src={selectedImage}
          alt="Selected" // Fallback alt text
          onError={(e) => {
            e.target.onerror = null; // Prevents infinite loop
            e.target.src = "path/to/placeholder-image.jpg"; // Set a placeholder image
          }}
          style={{
            maxWidth: "100%", // Allow the image to occupy more width
            maxHeight: "90vh", // Keep a reasonable height
            display: "block",
            margin: "auto",
            borderRadius: 0, // Remove border radius for full screen effect
            boxShadow: theme.shadows[5], // Add subtle shadow from theme
          }}
        />
      </motion.div>
    </Dialog>
  );
};

// Prop validation
ImageLightbox.propTypes = {
  selectedImage: PropTypes.string.isRequired, // selectedImage should be a string and required
  handleClose: PropTypes.func.isRequired, // handleClose should be a function and required
};

export default ImageLightbox;
