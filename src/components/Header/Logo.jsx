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
        alt="Firm Logo"
        style={{
          width: theme.spacing(5), // Use theme spacing for width
          height: theme.spacing(5), // Use theme spacing for height
          marginRight: theme.spacing(1), // Use theme spacing for margin
        }}
      />
    </Box>
  );
};

export default Logo;
