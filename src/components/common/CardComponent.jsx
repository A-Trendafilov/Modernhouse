import { Box, Card, CardContent, Typography, useTheme } from "@mui/material";
import PropTypes from "prop-types";
import { IconContext } from "react-icons";

// Extracted styles object
const cardStyles = {
  card: (theme) => ({
    background: theme.palette.background.default,
    maxWidth: 500,
    boxShadow: 3,
    borderRadius: 3,
    transition: "transform 0.3s ease",
    "&:hover": {
      transform: "scale(1.05)",
    },
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  }),
  iconContainer: {
    display: "flex",
    justifyContent: "center",
    width: "30%",
  },
  textContainer: {
    width: "65%",
  },
  title: {
    fontWeight: "bold",
  },
  description: (theme) => ({
    marginTop: theme.spacing(5),
  }),
};

const CardComponent = ({ Icon, title, description }) => {
  const theme = useTheme();

  return (
    <Card sx={cardStyles.card(theme)}>
      <CardContent>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            width: "100%",
          }}
        >
          {/* Left Column for Icon */}
          <Box sx={cardStyles.iconContainer}>
            <IconContext.Provider
              value={{
                size: "3em", // Set the icon size
                color: theme.palette.primary.main, // Set the icon color from the theme
              }}
            >
              <Icon /> {/* Render the Icon component */}
            </IconContext.Provider>
          </Box>

          {/* Right Column for Text */}
          <Box sx={cardStyles.textContainer}>
            <Typography variant="h6" component="div" sx={cardStyles.title}>
              {title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={cardStyles.description(theme)}
            >
              {description}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

CardComponent.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default CardComponent;
