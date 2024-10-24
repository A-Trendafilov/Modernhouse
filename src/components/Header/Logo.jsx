// Logo.jsx
import React from "react";
import logo from "../../assets/Logo.png";
import { Box, useTheme } from "@mui/material"; // Import useTheme

const Logo = () => {
  const theme = useTheme(); // Access the theme object

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <img
        src={logo}
        alt="Modern House Logo"
        style={{
          width: theme.spacing(10), // Use theme spacing for width
          height: theme.spacing(8), // Use theme spacing for height
          margin: theme.spacing(1), // Use theme spacing for margin
        }}
      />
    </Box>
  );
};

export default Logo;
