import { useState, useMemo, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import TitleDivider from "@/components/ui/title-divider";
import { images } from "@/data/galleryImg";

import FilterButtons from "./FilterButtons";
import ImageCard from "./ImageCard";
import ImageLightbox from "./ImageLightbox";

const ImgGallery = () => {
  const { t } = useTranslation();

  const categories = [
    t("common.all"),
    t("gallery.containers"),
    t("gallery.prefabHouses"),
    t("gallery.steelHouses"),
  ];

  const [selectedCategory, setSelectedCategory] = useState(t("common.all"));
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const [loading, setLoading] = useState(true);

  const filteredImages = useMemo(() => {
    return selectedCategory === t("common.all")
      ? images
      : images.filter((image) => t(image.category) === selectedCategory);
  }, [selectedCategory, t]);

  const imageSources = useMemo(() => filteredImages.map((image) => image.src), [filteredImages]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="px-4 sm:px-6 py-16 sm:py-20 max-w-7xl mx-auto">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-[0.1em] text-gradient mb-4">
          {t("gallery.title")}
        </h2>
        <TitleDivider />
      </motion.div>

      <FilterButtons
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {loading ? (
        <div className="flex justify-center my-16">
          <div className="relative w-10 h-10">
            <div className="absolute inset-0 rounded-full border-2 border-brass/30" />
            <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-brass animate-spin" />
          </div>
        </div>
      ) : filteredImages.length === 0 ? (
        <p className="text-base text-center my-16 text-white/40">
          {t("gallery.noImages")}
        </p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {filteredImages.map((image, index) => (
            <ImageCard
              key={image.id}
              image={image}
              onClick={() => setLightboxIndex(index)}
            />
          ))}
        </div>
      )}

      <ImageLightbox
        images={imageSources}
        currentIndex={lightboxIndex}
        isOpen={lightboxIndex >= 0}
        onClose={() => setLightboxIndex(-1)}
        onNavigate={setLightboxIndex}
      />
    </div>
  );
};

export default ImgGallery;
