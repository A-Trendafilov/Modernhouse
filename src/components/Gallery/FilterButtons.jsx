import React from "react";
import { Button, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import PropTypes from "prop-types"; // Import PropTypes

const FilterButtons = ({
  categories,
  selectedCategory,
  setSelectedCategory,
}) => {
  const theme = useTheme();

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
          aria-pressed={selectedCategory === category} // Accessibility: indicates the pressed state
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
                : theme.palette.text.primary,
            borderColor:
              selectedCategory === category
                ? theme.palette.accent.red
                : theme.palette.divider,
            "&:hover": {
              backgroundColor:
                selectedCategory === category
                  ? theme.palette.highlight.red // Ensure a suitable color for accessibility
                  : theme.palette.action.hover, // Use action.hover for better visibility
              borderColor: theme.palette.accent.red,
            },
          }}
        >
          {category}
        </Button>
      ))}
    </Box>
  );
};

// Prop Types for better type checking
FilterButtons.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired, // Ensure categories is an array of strings
  selectedCategory: PropTypes.string.isRequired, // Ensure selectedCategory is a string
  setSelectedCategory: PropTypes.func.isRequired, // Ensure setSelectedCategory is a function
};

export default FilterButtons;
