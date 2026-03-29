import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ZoomIn } from "lucide-react";

import type { GalleryImage } from "@/types";
import LazyLoad from "@/components/utils/LazyLoad";

interface ImageCardProps {
  image: GalleryImage;
  onClick: () => void;
}

const ImageCard = ({ image, onClick }: ImageCardProps) => {
  const { t } = useTranslation();

  return (
    <LazyLoad threshold={0.1}>
    <motion.div
      className="relative cursor-pointer overflow-hidden rounded-xl group aspect-[4/3]"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") onClick();
      }}
    >
      <img
        src={image.src}
        alt={t(image.title) || "Image"}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
        onError={(event) => {
          const target = event.target as HTMLImageElement;
          target.onerror = null;
          target.src = "path/to/placeholder-image.jpg";
        }}
      />

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end p-4">
        <ZoomIn className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-8 w-8 text-white/70" />
        <div className="w-full">
          <div className="h-0.5 w-8 bg-brass mb-2" />
          <p className="text-sm text-white font-medium tracking-wide">{t(image.title)}</p>
        </div>
      </div>
    </motion.div>
    </LazyLoad>
  );
};

export default ImageCard;
