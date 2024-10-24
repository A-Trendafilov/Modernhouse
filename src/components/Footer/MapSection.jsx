// src/components/MapSection.jsx
import React from "react";
import { Box, Typography, useTheme } from "@mui/material";

const MapSection = React.memo(({ title, src }) => {
  const theme = useTheme();

  return (
    <Box sx={{}}>
      <Typography
        variant="h6"
        sx={{
          marginBottom: 2,
          fontWeight: "bold",
          color: theme.palette.text.primary,
          textAlign: "center", // Center align the title for better aesthetics
        }}
      >
        {title}
      </Typography>
      <Box
        sx={{
          borderRadius: 2,
          overflow: "hidden",
          background: "transparent",
          padding: 2,
        }}
      >
        <iframe
          title={title}
          src={src}
          width="100%"
          height="300"
          style={{
            transition: "transform 0.3s ease", // Smooth scaling effect
            background: "transparent", // Ensure the iframe background is transparent
          }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </Box>
    </Box>
  );
});

export default MapSection;
