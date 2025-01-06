import { Box, Typography } from "@mui/material"; // Import Material-UI components

function ModularHouses() {
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
        Модулни къщи
      </Typography>
    </Box>
  );
}

export default ModularHouses;
