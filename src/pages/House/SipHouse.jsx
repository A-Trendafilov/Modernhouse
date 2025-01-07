import { Box, Typography } from "@mui/material"; // Import Material-UI components

const SipHouse = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: 2,
        bgcolor: "background.default",
        color: "text.primary",
      }}
    >
      <Typography variant="h1" sx={{ marginBottom: 2 }}>
        Сглобяеми къщи
      </Typography>
      <Typography variant="body1" sx={{ textAlign: "center" }}>
        Прес-панел система
      </Typography>
    </Box>
  );
};

export default SipHouse;
