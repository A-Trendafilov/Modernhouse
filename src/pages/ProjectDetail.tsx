import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle, ZoomIn } from "lucide-react";
import { useTranslation } from "react-i18next";

import { Button } from "@/components/ui/button";
import { projectData } from "@/data/projectData";
import ImageLightbox from "@/components/sections/ImageLightbox";

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const project = projectData.find((proj) => proj.id === projectId);

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center h-screen gap-4">
        <p className="text-lg text-white/60">{t("pages.projects.notFound")}</p>
        <Button variant="ghost" onClick={() => navigate("/projects")} className="text-brass">
          {t("pages.projects.backToProjects")}
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Image */}
      <div className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-center brightness-[0.4]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-6 pb-8 sm:pb-12 max-w-6xl mx-auto">
          <Button
            variant="ghost"
            onClick={() => navigate("/projects")}
            className="text-white/60 hover:text-brass mb-4 sm:mb-6 text-sm"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            {t("pages.projects.backToProjects")}
          </Button>
          <motion.h1
            className="font-display text-3xl sm:text-5xl lg:text-6xl tracking-[0.1em] text-gradient"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {project.title}
          </motion.h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        {/* Specs Bar */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-12 sm:mb-16"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          {project.specs.map((spec) => (
            <motion.div
              key={spec.label}
              variants={fadeUp}
              className="glass rounded-xl p-4 sm:p-5 text-center"
            >
              <p className="font-display text-xl sm:text-2xl md:text-3xl text-brass tracking-wider">
                {spec.value}
              </p>
              <p className="text-white/40 text-xs sm:text-sm mt-1">{t(spec.label)}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Description + Features */}
        <div className="flex flex-col lg:flex-row gap-10 sm:gap-16 mb-16 sm:mb-20">
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-2xl sm:text-3xl tracking-wider text-brass mb-4 sm:mb-6">
              {t("pages.projects.description")}
            </h2>
            <p className="text-white/60 leading-relaxed text-sm sm:text-base">{project.fullDescription}</p>
          </motion.div>

          <motion.div
            className="flex-1"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="font-display text-2xl sm:text-3xl tracking-wider text-brass mb-4 sm:mb-6">
              {t("pages.projects.features")}
            </h2>
            <div className="space-y-3">
              {project.features.map((feature) => (
                <motion.div
                  key={feature}
                  variants={fadeUp}
                  className="flex items-start gap-3 glass rounded-lg px-4 py-3"
                >
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-brass shrink-0 mt-0.5" />
                  <p className="text-white/70 text-xs sm:text-sm">{feature}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-2xl sm:text-3xl tracking-wider text-brass mb-6 sm:mb-8 text-center">
            {t("pages.projects.projectGallery")}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            {project.gallery.map((imageSrc, index) => (
              <motion.div
                key={index}
                className="relative overflow-hidden rounded-xl cursor-pointer group aspect-[4/3]"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                onClick={() => setLightboxIndex(index)}
              >
                <img
                  src={imageSrc}
                  alt={`${project.title} - ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <ZoomIn className="h-6 w-6 text-white/0 group-hover:text-white/80 transition-colors duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16 sm:mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Button
            onClick={() => navigate("/contact")}
            className="bg-brass hover:bg-brass-light text-background font-bold tracking-[0.15em] uppercase text-sm px-10 py-6 glow-brass"
          >
            {t("contact.requestQuote")}
          </Button>
        </motion.div>
      </div>

      {/* Lightbox */}
      <ImageLightbox
        images={project.gallery}
        currentIndex={lightboxIndex}
        isOpen={lightboxIndex >= 0}
        onClose={() => setLightboxIndex(-1)}
        onNavigate={setLightboxIndex}
      />
    </div>
  );
};

export default ProjectDetail;
