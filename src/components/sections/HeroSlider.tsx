import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import { heroSectionImg } from "@/data/heroSectionImg";

import HeroSlide from "./HeroSlide";

const HeroSlider = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true, duration: 40 }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);

  return (
    <div className="h-full w-full overflow-hidden" ref={emblaRef}>
      <div className="flex h-full">
        {heroSectionImg.map((image) => (
          <div key={image.id} className="min-w-0 flex-[0_0_100%] h-screen">
            <HeroSlide image={image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
