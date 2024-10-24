import React from "react";
import { Button, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles"; // Import useTheme

const FilterButtons = ({
  categories,
  selectedCategory,
  setSelectedCategory,
}) => {
  const theme = useTheme(); // Access the theme

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        mb: 4,
        gap: 1, // Add space between buttons
      }}
    >
      {categories.map((category) => (
        <Button
          key={category}
          onClick={() => setSelectedCategory(category)}
          variant={selectedCategory === category ? "contained" : "outlined"}
          sx={{
            mx: 1,
            minWidth: 180,
            backgroundColor:
              selectedCategory === category
                ? theme.palette.accent.red // Use theme color for active buttons
                : "transparent",
            color:
              selectedCategory === category
                ? theme.palette.accent.contrastText // Contrasting text color for active state
                : theme.palette.text.primary, // Regular text color
            borderColor:
              selectedCategory === category
                ? theme.palette.accent.red
                : theme.palette.divider, // Border color for outlined variant
            "&:hover": {
              backgroundColor:
                selectedCategory === category
                  ? theme.palette.highlight.red // Highlight color for active button on hover
                  : theme.palette.action.red, // Hover color for inactive buttons
              borderColor: theme.palette.accent.red, // Ensure border color stays consistent on hover
            },
          }}
        >
          {category}
        </Button>
      ))}
    </Box>
  );
};

export default FilterButtons;
