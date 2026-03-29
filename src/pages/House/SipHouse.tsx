import ServicePage from "@/components/sections/ServicePage";

const SipHouse = () => (
  <ServicePage
    translationPrefix="pages.sipHouse"
    features={["insulation", "speed", "strength", "fireResistant", "soundproof", "lifespan"]}
    extraSection={{
      titleKey: "pages.sipHouse.processTitle",
      items: [
        "pages.sipHouse.process.design",
        "pages.sipHouse.process.production",
        "pages.sipHouse.process.foundation",
        "pages.sipHouse.process.assembly",
        "pages.sipHouse.process.finishing",
      ],
    }}
  />
);

export default SipHouse;
