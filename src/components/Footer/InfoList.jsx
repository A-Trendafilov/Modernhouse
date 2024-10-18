// src/components/InfoList.jsx
import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const InfoList = ({
  items,
  boxStyle = {},
  textStyle = {},
  motionProps = {
    whileHover: { scale: 1.05, color: "#14deee" },
    transition: { duration: 0.3 },
  },
}) => (
  <>
    {items.map(({ Icon, text, address }, index) => (
      <Box
        key={index}
        sx={{
          display: "flex",
          flexDirection: "column", // Change to column layout for stacking
          marginBottom: "10px",
          ...boxStyle,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {Icon && <Icon sx={{ marginRight: "8px" }} />} {/* Render the icon */}
          {typeof text === "string" ? (
            // Render text directly if it's a plain string
            <Typography variant="body1" sx={{ color: "#fff", ...textStyle }}>
              {text}
            </Typography>
          ) : text && React.isValidElement(text) ? (
            // Render clickable link if text is a valid React element
            <motion.a
              href={text.props.href} // Safely access href if text is a valid element
              style={{
                textDecoration: "none",
                cursor: "pointer",
                color: "inherit", // Inherit color from the parent
                ...textStyle,
              }}
              {...motionProps}
            >
              <Typography
                variant="body1"
                sx={{
                  color: "inherit", // Inherit color from motion.a
                }}
              >
                {text.props.children} {/* Display text directly */}
              </Typography>
            </motion.a>
          ) : (
            <Typography variant="body1" sx={{ color: "#fff", ...textStyle }}>
              Invalid Link
            </Typography>
          )}
        </Box>

        {address && ( // Conditionally render address if it exists
          <Typography variant="body2" sx={{ marginTop: "10px", color: "#ccc" }}>
            {address} {/* Display address directly below text */}
          </Typography>
        )}
      </Box>
    ))}
  </>
);

export default InfoList;
