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

  // Define button styles
  const buttonStyles = (isSelected) => ({
    mx: 1,
    minWidth: 180,
    backgroundColor: isSelected ? theme.palette.accent.dark : "transparent",
    color: isSelected
      ? theme.palette.text.secondary
      : theme.palette.text.primary,
    "&:hover": {
      backgroundColor: isSelected
        ? theme.palette.highlight.main
        : theme.palette.action.light,
    },
  });

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        mb: 10,
        mt: 5,
        gap: 1, // Add space between buttons
      }}
    >
      {categories.map((category) => {
        const isSelected = selectedCategory === category;

        return (
          <Button
            key={category}
            onClick={() => setSelectedCategory(category)}
            variant={isSelected ? "contained" : "outlined"}
            aria-pressed={isSelected} // Accessibility: indicates the pressed state
            tabIndex={0} // Ensure button is focusable
            sx={buttonStyles(isSelected)} // Apply button styles
          >
            {category}
          </Button>
        );
      })}
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
