import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { projectData } from "../data/projectData";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import FilterButtons from "../components/Gallery/FilterButtons";

const Project = () => {
  const [selectedCategory, setSelectedCategory] = useState("Всички");

  // Filter projects based on the selected category
  const filteredProjects =
    selectedCategory === "Всички"
      ? projectData
      : projectData.filter((project) => project.category === selectedCategory);

  const categories = [
    "Всички",
    ...new Set(projectData.map((project) => project.category)),
  ];

  return (
    <Box
      sx={{
        padding: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "transparent",
        backdropFilter: "blur(5px)",
      }}
    >
      <Typography variant="h4" gutterBottom align="center">
        Нашите Проекти
      </Typography>

      {/* Filter Buttons */}
      <FilterButtons
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 5,
          maxWidth: "1200px",
          width: "100%",
        }}
      >
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </Box>
    </Box>
  );
};

export default Project;
