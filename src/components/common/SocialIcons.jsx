import PropTypes from "prop-types";
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
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
            backgroundColor: "transparent",
            padding: 1,
            color: theme.palette.text.primary,
            transition: "background-color 0.3s ease, transform 0.3s ease",
          }}
          whileHover={{
            scale: 1.2,
            color: theme.palette.action.hover,
            backgroundColor: theme.palette.background.default,
          }}
        >
          <Icon sx={{ fontSize: 40, color: theme.palette.text.primary }} />
        </motion.a>
      ))}
    </Box>
  );
};

SocialIcons.propTypes = {
  socialLinks: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired, // The URL string is required
      Icon: PropTypes.elementType.isRequired, // A React component or element type is required
    })
  ).isRequired, // `socialLinks` is required
};

SocialIcons.defaultProps = {
  socialLinks: [], // Default to an empty array
};

export default SocialIcons;
