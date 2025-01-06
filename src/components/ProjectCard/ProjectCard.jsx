import PropTypes from "prop-types"; // Import PropTypes
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  useTheme,
} from "@mui/material"; // Import useTheme
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  const theme = useTheme(); // Access the theme

  // Define styles for the ProjectCard
  const styles = {
    card: {
      width: { xs: "100%", sm: "300px" },
      boxShadow: theme.shadows[3], // Use theme shadows
      backgroundColor: "transparent",
      backdropFilter: "blur(5px)",
      border: "1px solid rgba(255, 255, 255, 0.3)", // Semi-transparent border
    },
    media: {
      objectFit: "cover",
    },
    title: {
      variant: "h6",
      color: theme.palette.text.primary, // Use theme text color
    },
    description: {
      variant: "body2",
      color: theme.palette.text.secondary, // Use theme secondary text color
      gutterBottom: true,
    },
    button: {
      component: Link,
      to: project.link,
      variant: "contained",
      color: "primary",
      sx: {
        backgroundColor: theme.palette.primary.main, // Use theme primary color
        "&:hover": {
          backgroundColor: theme.palette.primary.dark, // Darker shade on hover
        },
      },
    },
  };

  return (
    <Card sx={styles.card}>
      <CardMedia
        component="img"
        height="200"
        image={project.image}
        alt={project.title}
        sx={styles.media}
      />
      <CardContent>
        <Typography {...styles.title}>{project.title}</Typography>
        <Typography {...styles.description}>{project.description}</Typography>
        <Button {...styles.button}>Повече информация</Button>
      </CardContent>
    </Card>
  );
};

// Prop types validation
ProjectCard.propTypes = {
  project: PropTypes.shape({
    image: PropTypes.string.isRequired, // Image URL is a required string
    title: PropTypes.string.isRequired, // Project title is a required string
    description: PropTypes.string.isRequired, // Project description is a required string
    link: PropTypes.string.isRequired, // Project link URL is a required string
  }).isRequired, // The 'project' prop is required
};

export default ProjectCard;
