// src/components/MapSection.jsx
import React from "react";
import { Box, Typography, useTheme } from "@mui/material";

const MapSection = React.memo(({ title, src }) => {
  const theme = useTheme();

  return (
    <Box sx={{ padding: 2 }}>
      <Typography
        variant="h6"
        sx={{
          marginBottom: 1,
          fontWeight: "bold",
          color: theme.palette.text.primary,
          textAlign: "center", // Center align the title for better aesthetics
        }}
      >
        {title}
      </Typography>
      <Box
        sx={{
          border: `1px solid ${theme.palette.divider}`,
          borderRadius: 2,
          overflow: "hidden",
          boxShadow: 1, // Add a subtle shadow for depth
        }}
      >
        <iframe
          src={src}
          width="100%"
          height="300"
          style={{
            border: 0,
            transition: "transform 0.3s ease", // Smooth scaling effect
          }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={title}
        />
      </Box>
    </Box>
  );
});

export default MapSection;
