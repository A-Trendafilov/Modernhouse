// src/components/Gallery/FilterButtons.jsx
import React from "react";
import { Button, Box } from "@mui/material";

const FilterButtons = ({ categories, selectedCategory, setSelectedCategory }) => {
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
          sx={{ mx: 1, minWidth: 180 }} // Set a minWidth for better appearance
        >
          {category}
        </Button>
      ))}
    </Box>
  );
};

export default FilterButtons;
