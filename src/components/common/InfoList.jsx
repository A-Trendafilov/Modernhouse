import React from "react";
import PropTypes from "prop-types";
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
      color: linkColor || theme.palette.primary.main,
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

InfoList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      Icon: PropTypes.elementType, // A React component or element type
      text: PropTypes.oneOfType([
        PropTypes.string, // Plain text
        PropTypes.element, // React element
      ]).isRequired,
    })
  ).isRequired, // `items` is an array of objects, and it's required
  textStyle: PropTypes.object, // Optional object for text styles
  motionProps: PropTypes.object, // Optional object for motion props
  iconColor: PropTypes.string, // Optional string for icon color
  linkColor: PropTypes.string, // Optional string for link color
};

InfoList.defaultProps = {
  items: [], // Default to an empty array if no items are provided
  textStyle: {}, // Default to an empty object for text styles
  motionProps: {}, // Default to an empty object for motion props
  iconColor: null, // Default to `null`, meaning it will fallback to theme
  linkColor: null, // Default to `null`, meaning it will fallback to theme
};

export default InfoList;
