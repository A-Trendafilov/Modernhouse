import { useState, useMemo, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Loader2 } from "lucide-react";

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
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const filteredImages = useMemo(() => {
    return selectedCategory === t("common.all")
      ? images
      : images.filter((image) => t(image.category) === selectedCategory);
  }, [selectedCategory, t]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="my-12 w-full px-4">
      <h2 className="text-3xl font-bold text-center mb-2 text-white tracking-tight">
        {t("gallery.title")}
      </h2>
      <div className="flex justify-center mb-6">
        <div className="h-0.5 w-12 bg-[#B8860B]" />
      </div>

      <FilterButtons
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {loading ? (
        <div className="flex justify-center my-12">
          <Loader2 className="h-8 w-8 animate-spin text-[#B8860B]" />
        </div>
      ) : filteredImages.length === 0 ? (
        <p className="text-lg text-center my-12 text-neutral-400">
          {t("gallery.noImages")}
        </p>
      ) : (
        <div className="flex flex-wrap gap-6 justify-center">
          {filteredImages.map((image) => (
            <ImageCard
              key={image.id}
              image={image}
              onClick={() => setSelectedImage(image.src)}
            />
          ))}
        </div>
      )}

      <ImageLightbox
        selectedImage={selectedImage}
        handleClose={() => setSelectedImage(null)}
      />
    </div>
  );
};

export default ImgGallery;
