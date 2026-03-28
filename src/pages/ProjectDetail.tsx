import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { projectData } from "@/data/projectData";

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
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

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
      <div className="relative h-[50vh] sm:h-[60vh] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover brightness-[0.4]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-12 max-w-6xl mx-auto">
          <Button
            variant="ghost"
            onClick={() => navigate("/projects")}
            className="text-white/60 hover:text-brass mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            {t("pages.projects.backToProjects")}
          </Button>
          <motion.h1
            className="font-display text-5xl sm:text-6xl lg:text-7xl tracking-wider text-gradient"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {project.title}
          </motion.h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Specs Bar */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          {project.specs.map((spec) => (
            <motion.div
              key={spec.label}
              variants={fadeUp}
              className="glass rounded-xl p-5 text-center"
            >
              <p className="font-display text-2xl sm:text-3xl text-brass tracking-wider">
                {spec.value}
              </p>
              <p className="text-white/40 text-sm mt-1">{t(spec.label)}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Description + Features */}
        <div className="flex flex-col lg:flex-row gap-16 mb-20">
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl tracking-wider text-brass mb-6">
              {t("pages.projects.description")}
            </h2>
            <p className="text-white/60 leading-relaxed text-base">{project.fullDescription}</p>
          </motion.div>

          <motion.div
            className="flex-1"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl tracking-wider text-brass mb-6">
              {t("pages.projects.features")}
            </h2>
            <div className="space-y-3">
              {project.features.map((feature) => (
                <motion.div
                  key={feature}
                  variants={fadeUp}
                  className="flex items-start gap-3 glass rounded-lg px-4 py-3"
                >
                  <CheckCircle className="h-5 w-5 text-brass shrink-0 mt-0.5" />
                  <p className="text-white/70 text-sm">{feature}</p>
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
          <h2 className="font-display text-3xl tracking-wider text-brass mb-8 text-center">
            {t("pages.projects.projectGallery")}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {project.gallery.map((imageSrc, index) => (
              <motion.div
                key={index}
                className="relative overflow-hidden rounded-xl cursor-pointer group aspect-[4/3]"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                onClick={() => setLightboxImage(imageSrc)}
              >
                <img
                  src={imageSrc}
                  alt={`${project.title} - ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-white/0 group-hover:text-white/80 font-display text-lg tracking-wider transition-colors duration-300">
                    {index + 1} / {project.gallery.length}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Button
            onClick={() => navigate("/contact")}
            className="bg-brass hover:bg-brass-light text-background font-semibold px-10 py-6 text-lg"
          >
            {t("contact.requestQuote")}
          </Button>
        </motion.div>
      </div>

      {/* Lightbox */}
      <Dialog open={Boolean(lightboxImage)} onOpenChange={() => setLightboxImage(null)}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-transparent border-none shadow-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center justify-center"
            onClick={() => setLightboxImage(null)}
          >
            {lightboxImage && (
              <img
                src={lightboxImage}
                alt="Project gallery"
                className="max-w-full max-h-[90vh] rounded-lg shadow-2xl"
              />
            )}
          </motion.div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProjectDetail;
