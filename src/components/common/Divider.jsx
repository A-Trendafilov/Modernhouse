// src/components/utils/Divider.jsx
import React from "react";
import { Box, useTheme } from "@mui/material";

const Divider = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        borderBottom: `2px solid ${theme.palette.divider}`,
        marginY: theme.spacing(2),
      }}
    />
  );
};

export default Divider;
