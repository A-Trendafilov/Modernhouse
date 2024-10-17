import React from "react";
import { Box, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { motion } from "framer-motion"; // Import motion from framer-motion

const LocationLinks = ({ locations }) => (
  <>
    {locations.map(({ label, link, address }, index) => (
      <Box
        key={index}
        sx={{
          display: "flex",
          flexDirection: "column",
          marginBottom: "20px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <LocationOnIcon sx={{ marginRight: "8px" }} />
          <motion.div
            whileHover={{ scale: 1.1, color: "#14deee" }} // Scale effect on hover
            transition={{ duration: 0.3 }} // Transition duration for scaling
            style={{ display: "inline-block", cursor: "pointer" }} // Use inline-block to avoid extra space
            onClick={() => window.open(link, "_blank")} // Handle click event
          >
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              {label}
            </Typography>
          </motion.div>
        </Box>
        <Typography variant="body2" sx={{ marginTop: "10px", color: "#ccc" }}>
          {address} {/* Display address in a separate line */}
        </Typography>
      </Box>
    ))}
  </>
);

export default LocationLinks;
