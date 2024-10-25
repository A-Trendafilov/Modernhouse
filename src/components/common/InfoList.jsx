// src/components/InfoList/InfoList.jsx
import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";

const InfoList = ({
  items,
  textStyle = {},
  motionProps,
  iconColor,
  linkColor,
}) => {
  const theme = useTheme();

  // Define styles for the InfoList
  const styles = {
    item: {
      display: "flex",
      alignItems: "center",
      marginBottom: 2, // Margin between items
    },
    text: {
      color: theme.palette.text.primary,
      ...textStyle,
    },
    link: {
      textDecoration: "none",
      color: linkColor || theme.palette.accent.main,
    },
  };

  return (
    <>
      {items.map(({ Icon, text }, index) => (
        <Box key={index} sx={styles.item}>
          {Icon && (
            <Icon
              sx={{
                marginRight: 1,
                color: iconColor || theme.palette.text.primary,
              }}
            />
          )}
          {typeof text === "string" ? (
            <Typography variant="body1" sx={styles.text}>
              {text}
            </Typography>
          ) : React.isValidElement(text) ? (
            <motion.a
              href={text.props.href}
              style={styles.link}
              {...motionProps}
            >
              <Typography variant="body1" sx={{ color: "inherit" }}>
                {text.props.children}
              </Typography>
            </motion.a>
          ) : (
            <Typography variant="body1" sx={styles.text}>
              Invalid Link
            </Typography>
          )}
        </Box>
      ))}
    </>
  );
};

export default InfoList;
