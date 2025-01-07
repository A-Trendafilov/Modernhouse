import PropTypes from "prop-types"; // Import PropTypes
import { Box, Typography, Button, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

const HeroContent = ({ title, description, route }) => {
  const theme = useTheme();
  const navigate = useNavigate();

  const styles = {
    container: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      textAlign: "center",
      color: theme.palette.text.secondary,
      backgroundColor: theme.palette.background.default,
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
      border: `1px solid ${theme.palette.common.white}`,
      color: theme.palette.common.white,
      "&:hover": {
        backgroundColor: theme.palette.primary.main, // Change background on hover
        color: theme.palette.common.white, // Keep text color white on hover
        border: `1px solid ${theme.palette.primary.main}`, // Change border color to match hover background
      },
    },
  };

  const onClick = () => {
    navigate(route);
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
        onClick={onClick}
      >
        Повече информация
      </Button>
    </Box>
  );
};

HeroContent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
};

export default HeroContent;
