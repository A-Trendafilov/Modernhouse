import React from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useTheme } from "@mui/material/styles";

const SnackbarAlert = ({ open, message, onClose, severity = "success" }) => {
  const theme = useTheme(); // Access the theme

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={onClose}>
      <Alert
        onClose={onClose}
        severity={severity}
        sx={{
          width: "100%",
          backgroundColor: theme.palette[severity].main, // Use theme color for alert background
          color: theme.palette[severity].contrastText, // Use theme color for alert text
          borderRadius: "8px", // Rounded corners
          boxShadow: theme.shadows[2], // Add shadow for depth
        }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default SnackbarAlert;
