import { Box, Typography } from "@mui/material"; // Import Material-UI components

const PvcJoinery = () => {
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
        Дограма
      </Typography>
      <Typography variant="body1" sx={{ textAlign: "center" }}>
        ПВЦ
      </Typography>
    </Box>
  );
};

export default PvcJoinery;
