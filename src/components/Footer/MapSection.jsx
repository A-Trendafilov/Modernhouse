// MapSection.jsx
import React from "react";
import { motion } from "framer-motion";
import { Typography } from "@mui/material";

const MapSection = ({ title, src, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    style={{ width: "100%", marginBottom: "20px" }} // Add margin for spacing
  >
    <Typography variant="h6" sx={{ marginBottom: "10px" }}>
      {title}:
    </Typography>
    <iframe
      src={src}
      width="100%" // Set width to 100% of the parent
      height="300" // Increase height as needed
      style={{ border: 0, borderRadius: "8px" }} // Optional: add border radius
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  </motion.div>
);

export default MapSection;
