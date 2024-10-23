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
            {Icon && (
              <Icon
                sx={{ marginRight: 1, color: theme.palette.secondary.main }}
              />
            )}
            {typeof text === "string" ? (
              <Typography
                variant="body1"
                sx={{
                  color: theme.palette.text.primary,
                  ...textStyle,
                  transition: "color 0.3s ease", // Smooth color transition
                  "&:hover": {
                    color: theme.palette.accent.main, // Change color on hover
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
                    "&:hover": {
                      color: theme.palette.accent.main, // Change color on hover
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
                color: theme.palette.text.secondary,
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
