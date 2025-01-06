import { Box, Typography } from "@mui/material"; // Import Material-UI components

const SteelHouse = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh", // Full height of the viewport
        padding: 2, // Material-UI spacing
        bgcolor: "background.default", // Use theme's background color
        color: "text.primary", // Use theme's primary text color
      }}
    >
      <Typography variant="h1" sx={{ marginBottom: 2 }}>
        Steel House
      </Typography>
      <Typography variant="body1" sx={{ textAlign: "center" }}>
        This is the Steel House section.
      </Typography>
    </Box>
  );
};

export default SteelHouse;
