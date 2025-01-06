import React from "react";
import PropTypes from "prop-types"; // Import PropTypes
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

MapSection.displayName = "MapSection";

// Prop validation
MapSection.propTypes = {
  title: PropTypes.string.isRequired, // title should be a required string
  src: PropTypes.string.isRequired, // src should be a required string
};

export default MapSection;
