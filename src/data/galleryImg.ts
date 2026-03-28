import type { GalleryImage } from "@/types";

const containerImages: GalleryImage[] = Array.from({ length: 24 }, (_, index) => ({
  id: `container-${index + 1}`,
  src: `./assets/gallery/container_${index + 1}.jpg`,
  title: "gallery.containerTitle",
  category: "gallery.containers",
}));

const houseImages: GalleryImage[] = Array.from({ length: 28 }, (_, index) => ({
  id: `house-${index + 1}`,
  src: `./assets/gallery/house_${index + 1}.jpg`,
  title: "gallery.prefabTitle",
  category: "gallery.prefabHouses",
}));

const steelHouseImages: GalleryImage[] = Array.from({ length: 10 }, (_, index) => ({
  id: `steel-house-${index + 1}`,
  src: `./assets/gallery/steel_house_${index + 1}.jpg`,
  title: "gallery.steelTitle",
  category: "gallery.steelHouses",
}));

export const images: GalleryImage[] = [...containerImages, ...houseImages, ...steelHouseImages];
