// Logo.jsx
import React from "react";
import logo from "../../assets/Logo.png";
import { Box } from "@mui/material";

const Logo = () => (
  <Box sx={{ display: "flex", alignItems: "center" }}>
    <img
      src={logo}
      alt="Firm Logo"
      style={{ width: "40px", height: "40px", marginRight: "10px" }}
    />
  </Box>
);

export default Logo;
