import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import type { GalleryImage } from "@/types";
import LazyLoad from "../utils/LazyLoad";

interface ImageCardProps {
  image: GalleryImage;
  onClick: () => void;
}

const ImageCard = ({ image, onClick }: ImageCardProps) => {
  const { t } = useTranslation();

  return (
    <LazyLoad>
      <motion.div
        className="relative cursor-pointer overflow-hidden rounded-lg w-80 group"
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        onClick={onClick}
        role="button"
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            onClick();
          }
        }}
      >
        <img
          src={image.src}
          alt={t(image.title) || "Image"}
          className="h-[200px] sm:h-[250px] md:h-[300px] w-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(event) => {
            const target = event.target as HTMLImageElement;
            target.onerror = null;
            target.src = "path/to/placeholder-image.jpg";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 w-full">
            <div className="h-0.5 w-8 bg-[#B8860B] mb-2" />
            <p className="text-sm text-white font-medium tracking-wide">
              {t(image.title)}
            </p>
          </div>
        </div>
      </motion.div>
    </LazyLoad>
  );
};

export default ImageCard;
