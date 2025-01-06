import { Box, Typography } from "@mui/material"; // Import Material-UI components

const About = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh", // Full height of the viewport
        padding: 2, // Material-UI spacing
        bgcolor: "transparent", // Use theme's background color
      }}
    >
      <Typography variant="h1" sx={{ marginBottom: 2 }}>
        About Us
      </Typography>
      <Typography variant="body1" sx={{ textAlign: "center", maxWidth: 600 }}>
        We are a team dedicated to designing and constructing modern homes that
        inspire and provide comfort. Our mission is to blend aesthetics with
        functionality, ensuring every home is a perfect reflection of its
        owners.
      </Typography>
    </Box>
  );
};

export default About;
