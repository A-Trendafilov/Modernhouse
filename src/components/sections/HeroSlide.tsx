import { motion } from "framer-motion";

import type { HeroImage } from "@/types";

import HeroContent from "./HeroContent";

interface HeroSlideProps {
  image: HeroImage;
}

const HeroSlide = ({ image }: HeroSlideProps) => {
  return (
    <div className="relative w-full h-[70vh] sm:h-[80vh] md:h-screen overflow-hidden">
      <motion.img
        src={image.src}
        alt={image.alt}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        onError={(event) => {
          const target = event.target as HTMLImageElement;
          target.src = `${import.meta.env.BASE_URL}/assets/herosection/2-store-house.webp`;
        }}
        className="w-full h-full object-cover object-center"
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/20 to-background/70" />

      <HeroContent
        title={image.title}
        description={image.description}
        route={image.route}
      />
    </div>
  );
};

export default HeroSlide;
