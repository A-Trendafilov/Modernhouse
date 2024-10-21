import React from "react";
import { Box, useTheme } from "@mui/material";
import { motion } from "framer-motion";

const SocialIcons = ({ socialLinks }) => {
  const theme = useTheme();

  return (
    <Box sx={{ display: "flex", gap: "20px", marginTop: "20px" }}>
      {socialLinks.map(({ href, Icon }, index) => (
        <motion.a
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: theme.palette.text.primary }}
          whileHover={{ scale: 1.2, color: theme.palette.accent.main }}
        >
          <Icon sx={{ fontSize: "40px", color: "inherit" }} />
        </motion.a>
      ))}
    </Box>
  );
};

export default SocialIcons;
