import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import TitleDivider from "@/components/ui/title-divider";
import { projectData } from "@/data/projectData";
import ProjectCard from "@/components/sections/ProjectCard";
import FilterButtons from "@/components/sections/FilterButtons";

const Project = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState(t("common.all"));

  const filteredProjects =
    selectedCategory === t("common.all")
      ? projectData
      : projectData.filter((project) => project.category === selectedCategory);

  const categories = [
    t("common.all"),
    ...new Set(projectData.map((project) => project.category)),
  ];

  return (
    <div className="min-h-screen px-6 py-20">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-wider text-gradient mb-4">
          {t("pages.projects.title")}
        </h1>
        <TitleDivider />
      </motion.div>

      <FilterButtons
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Project;
