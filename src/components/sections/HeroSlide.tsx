import { motion } from "framer-motion";

import type { HeroImage } from "@/types";
import HeroContent from "./HeroContent";

interface HeroSlideProps {
  image: HeroImage;
}

const HeroSlide = ({ image }: HeroSlideProps) => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Image with parallax-like zoom */}
      <motion.img
        src={image.src}
        alt={image.alt}
        initial={{ opacity: 0, scale: 1.15 }}
        animate={{ opacity: 1, scale: 1.05 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
        onError={(event) => {
          const target = event.target as HTMLImageElement;
          target.src = `${import.meta.env.BASE_URL}/assets/herosection/2-store-house.webp`;
        }}
        className="w-full h-full object-cover"
      />

      {/* Cinematic gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/40 to-transparent" />

      {/* Vignette effect */}
      <div className="absolute inset-0" style={{ boxShadow: "inset 0 0 200px rgba(0,0,0,0.5)" }} />

      <HeroContent
        title={image.title}
        description={image.description}
        route={image.route}
      />
    </div>
  );
};

export default HeroSlide;
