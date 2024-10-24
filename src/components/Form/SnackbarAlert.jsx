import React from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useTheme } from "@mui/material/styles";
import PropTypes from "prop-types";

const SnackbarAlert = ({ open, message, onClose, severity = "success" }) => {
  const theme = useTheme(); // Access the theme

  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={onClose}
      aria-live="polite"
    >
      <Alert
        onClose={onClose}
        severity={severity}
        sx={{
          width: "100%",
          backgroundColor: theme.palette[severity].main, // Use theme color for alert background
          color: theme.palette[severity].contrastText, // Use theme color for alert text
          borderRadius: "8px", // Rounded corners
          boxShadow: theme.shadows[2], // Add shadow for depth
          transition: "transform 0.3s ease-in-out", // Smooth transition
        }}
        elevation={6} // Set elevation for shadow depth
        role="alert" // Accessibility: define the role of the alert
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

// Prop Types for better type checking
SnackbarAlert.propTypes = {
  open: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  severity: PropTypes.oneOf(["success", "error", "warning", "info"]),
};

export default SnackbarAlert;
