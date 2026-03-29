import ServicePage from "@/components/sections/ServicePage";

const PvcJoinery = () => (
  <ServicePage
    translationPrefix="pages.pvcJoinery"
    features={["insulation", "soundproof", "colors", "hardware", "glass", "warranty"]}
    extraSection={{
      titleKey: "pages.pvcJoinery.typesTitle",
      items: [
        "pages.pvcJoinery.types.tilt",
        "pages.pvcJoinery.types.sliding",
        "pages.pvcJoinery.types.fixed",
        "pages.pvcJoinery.types.folding",
      ],
    }}
  />
);

export default PvcJoinery;
