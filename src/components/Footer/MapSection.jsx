import React from "react";
import { Box, Typography, useTheme } from "@mui/material";

const MapSection = React.memo(({ title, src }) => {
  const theme = useTheme();

  return (
    <Box sx={{ flex: 1, padding: "10px" }}>
      <Typography
        variant="h6"
        sx={{
          flex: 1,
          marginBottom: "10px",
          fontWeight: "bold",
          color: theme.palette.text.primary,
        }}
      >
        {title}
      </Typography>
      <Box
        sx={{
          border: `1px solid ${theme.palette.divider}`,
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        <iframe
          src={src}
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={title}
        />
      </Box>
    </Box>
  );
});

export default MapSection;
