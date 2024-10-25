// src/components/MapSection.jsx
import React from "react";
import { Box, Typography, useTheme } from "@mui/material";

const MapSection = React.memo(({ title, src }) => {
  const theme = useTheme();

  return (
    <Box>
      <Typography
        variant="h6"
        sx={{ mb: 2, color: theme.palette.text.primary, textAlign: "center" }}
      >
        {title}
      </Typography>
      <Box sx={{ overflow: "hidden", padding: 2 }}>
        <iframe
          title={title}
          src={src}
          width="100%"
          height="300"
          style={{
            transition: "transform 0.3s ease",
            background: "transparent",
            borderRadius: 15, // Rounded corners for better aesthetics
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
