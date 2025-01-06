import { Box, Typography } from "@mui/material"; // Import Box and Typography from MUI

const Container = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column", // Align items in a column
        alignItems: "center", // Center align horizontally
        justifyContent: "center", // Center align vertically
        minHeight: "100vh", // Full viewport height
        bgcolor: "transparent", // Use theme's background color
        padding: 3, // Add padding for spacing
      }}
    >
      <Typography
        variant="h1" // Use h1 for the title
        gutterBottom // Space below the title
        sx={{
          fontWeight: "bold",
          color: "text.primary", // Use theme's primary text color
        }}
      >
        Container
      </Typography>
      <Typography
        variant="body1" // Use body1 for the paragraph
        sx={{
          textAlign: "center", // Center align the text
          color: "text.secondary", // Use theme's secondary text color
          maxWidth: "600px", // Optional: Limit the width of the paragraph
        }}
      >
        This is the Container page. Here you can display content related to
        container designs, information, and more.
      </Typography>
    </Box>
  );
};

export default Container;
