import { Box, useTheme } from "@mui/material";

const HorizontalDivider = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        borderBottom: `2px solid ${theme.palette.divider}`,
        marginY: theme.spacing(2),
      }}
    />
  );
};

export default HorizontalDivider;
