// SocialIcons.jsx
import React from "react";
import { Box } from "@mui/material";
import { motion } from "framer-motion";

const SocialIcons = ({ socialLinks }) => (
  <Box sx={{ display: "flex", gap: "15px", marginTop: "15px" }}>
    {socialLinks.map(({ href, Icon }, index) => (
      <motion.a
        key={index}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#fff" }}
        whileHover={{ scale: 1.2, color: "#14deee" }} // Hover animation directly in JSX
      >
        <Icon sx={{ fontSize: "30px" }} />
      </motion.a>
    ))}
  </Box>
);

export default SocialIcons;
