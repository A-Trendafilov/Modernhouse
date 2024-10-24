// src/components/SocialIcons.jsx
import React from "react";
import { Box, useTheme } from "@mui/material";
import { motion } from "framer-motion";

const SocialIcons = ({ socialLinks }) => {
  const theme = useTheme();

  return (
    <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
      {socialLinks.map(({ href, Icon }, index) => (
        <motion.a
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: theme.palette.text.primary,
            display: "flex", // Ensures the icon is centered
            alignItems: "center", // Centers icon vertically
            justifyContent: "center", // Centers icon horizontally
            borderRadius: "50%", // Rounded effect for modern look
            backgroundColor: "transparent", // Matches the background color
            padding: 1, // Adds padding for better spacing
            transition: "background-color 0.3s ease", // Smooth background transition
          }}
          whileHover={{
            scale: 1.2,
            color: theme.palette.accent.main,
            backgroundColor: theme.palette.highlight.main, // Change background on hover
          }}
        >
          <Icon sx={{ fontSize: 40, color: "inherit" }} />
        </motion.a>
      ))}
    </Box>
  );
};

export default SocialIcons;
