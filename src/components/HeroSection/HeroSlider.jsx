import Slider from "react-slick";

import { heroSectionImg } from "../../data/heroSectionImg";
import LazyLoad from "../utils/LazyLoad.jsx";
import HeroSlide from "./HeroSlide.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Slider settings configuration
const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  fade: true,
};

const HeroSlider = () => {
  return (
    <Slider {...sliderSettings} className="hero-slider">
      {heroSectionImg.map((image, index) => (
        <LazyLoad key={index}>
          <HeroSlide image={image} />
        </LazyLoad>
      ))}
    </Slider>
  );
};

export default HeroSlider;
