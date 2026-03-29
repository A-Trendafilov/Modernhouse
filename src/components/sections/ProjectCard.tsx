import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { t } = useTranslation();

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <Card className="w-full sm:w-[320px] bg-white/5 backdrop-blur-md border border-white/10 shadow-xl overflow-hidden group">
        <div className="relative overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="h-[220px] w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 p-4">
            <div className="h-0.5 w-8 bg-[#B8860B] mb-2" />
          </div>
        </div>
        <CardContent className="p-5">
          <h3 className="text-lg font-semibold text-white tracking-tight mb-1">
            {project.title}
          </h3>
          <p className="text-sm text-neutral-400 mb-5 leading-relaxed">
            {project.description}
          </p>
          <Button
            asChild
            className="bg-[#B8860B] text-white hover:bg-[#9A7209] border-none shadow-lg shadow-[#B8860B]/20 transition-all duration-300"
          >
            <Link to={project.link}>{t("common.moreInfo")}</Link>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
