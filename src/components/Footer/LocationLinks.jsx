// LocationLinks.jsx
import React from "react";
import { Box, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const LocationLinks = ({ locations }) => (
  <>
    {locations.map(({ label, link, address }, index) => (
      <Box
        key={index}
        sx={{ display: "flex", alignItems: "center", marginBottom: "5px" }}
      >
        <LocationOnIcon sx={{ marginRight: "8px" }} />
        <Typography variant="body1">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#fff", textDecoration: "none" }}
          >
            {label}: {address}
          </a>
        </Typography>
      </Box>
    ))}
  </>
);

export default LocationLinks;
