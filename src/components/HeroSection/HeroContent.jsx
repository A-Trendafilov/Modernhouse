import PropTypes from "prop-types"; // Import PropTypes
import { Box, Typography, Button, useTheme } from "@mui/material";

const HeroContent = ({ title, description }) => {
  const theme = useTheme();

  const styles = {
    container: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      textAlign: "center",
      color: theme.palette.common.white,
      backgroundColor: `${theme.palette.grey[900]}${
        theme.palette.action.selectedOpacity * 100
      }`,
      padding: {
        xs: theme.spacing(2),
        sm: theme.spacing(3),
        md: theme.spacing(4),
      },
      borderRadius: theme.shape.borderRadius,
      width: { xs: "80%", sm: "70%", md: "60%", lg: "50%" },
      boxSizing: "border-box",
    },
    title: {
      fontSize: { xs: "1.5rem", sm: "2rem", md: "3rem" },
    },
    description: {
      fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
    },
    button: {
      marginTop: theme.spacing(2),
      "&:hover": {
        backgroundColor: theme.palette.primary.main,
      },
    },
  };

  return (
    <Box sx={styles.container}>
      <Typography variant="h3" gutterBottom sx={styles.title}>
        {title}
      </Typography>
      <Typography variant="h5" gutterBottom sx={styles.description}>
        {description}
      </Typography>
      <Button
        variant="contained"
        aria-label={`Научете повече за ${title}`}
        sx={styles.button}
      >
        Повече информация
      </Button>
    </Box>
  );
};

// Prop types validation
HeroContent.propTypes = {
  title: PropTypes.string.isRequired, // Title should be a string and is required
  description: PropTypes.string.isRequired, // Description should be a string and is required
};

export default HeroContent;
