// src/components/Copyright.jsx
import React from "react";
import { Box, Typography } from "@mui/material";

const Copyright = ({ companyName }) => {
  return (
    <Box textAlign="center" marginTop={1} padding={1}>
      <Typography variant="body1" sx={{ color: "text.secondary" }}>
        © {new Date().getFullYear()} {companyName}. Всички права запазени.
      </Typography>
    </Box>
  );
};

export default Copyright;
