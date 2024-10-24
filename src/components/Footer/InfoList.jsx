// src/components/InfoList.jsx
import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";

const InfoList = ({ items, textStyle = {}, motionProps }) => {
  const theme = useTheme();

  return (
    <>
      {items.map(({ Icon, text, address }, index) => (
        <Box key={index} sx={{ mb: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {Icon && <Icon sx={{ marginRight: 1, color: "" }} />}
            {typeof text === "string" ? (
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.text.primary,
                  ...textStyle,
                  transition: "color 0.3s ease", // Smooth color transition
                  background: "transparent", // Set background to transparent
                  "&:hover": {
                    color: theme.palette.action.active, // Change color on hover
                  },
                }}
              >
                {text}
              </Typography>
            ) : React.isValidElement(text) ? (
              <motion.a
                href={text.props.href}
                style={{ textDecoration: "none", color: "inherit" }}
                {...motionProps}
              >
                <Typography
                  variant="body1"
                  sx={{
                    color: "inherit",
                    transition: "color 0.3s ease", // Smooth color transition
                    background: "transparent", // Set background to transparent
                    "&:hover": {
                      color: theme.palette.action.hover, // Change color on hover
                    },
                  }}
                >
                  {text.props.children}
                </Typography>
              </motion.a>
            ) : (
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.text.primary,
                  ...textStyle,
                  background: "transparent", // Set background to transparent
                }}
              >
                Invalid Link
              </Typography>
            )}
          </Box>
          {address && (
            <Typography
              variant="body2"
              sx={{
                mt: 1,
                color: theme.palette.text.primary,
                fontStyle: "italic", // Italics for addresses
              }}
            >
              {address}
            </Typography>
          )}
        </Box>
      ))}
    </>
  );
};

export default InfoList;
