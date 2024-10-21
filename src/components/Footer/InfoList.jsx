import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";

const InfoList = ({ items, textStyle = {}, motionProps }) => {
  const theme = useTheme();

  return (
    <>
      {items.map(({ Icon, text, address }, index) => (
        <Box
          key={index}
          sx={{ display: "flex", flexDirection: "column", mb: 2 }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {Icon && (
              <Icon
                sx={{ marginRight: "8px", color: theme.palette.secondary.main }}
              />
            )}
            {typeof text === "string" ? (
              <Typography
                variant="body1"
                sx={{ color: theme.palette.text.primary, ...textStyle }}
              >
                {text}
              </Typography>
            ) : text && React.isValidElement(text) ? (
              <motion.a
                href={text.props.href}
                style={{ textDecoration: "none", color: "inherit" }}
                {...motionProps}
              >
                <Typography variant="body1" sx={{ color: "inherit" }}>
                  {text.props.children}
                </Typography>
              </motion.a>
            ) : (
              <Typography
                variant="body1"
                sx={{ color: theme.palette.text.primary, ...textStyle }}
              >
                Invalid Link
              </Typography>
            )}
          </Box>
          {address && (
            <Typography
              variant="body2"
              sx={{ marginTop: "10px", color: theme.palette.text.secondary }}
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
