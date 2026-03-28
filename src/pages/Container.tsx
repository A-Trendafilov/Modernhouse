import ServicePage from "@/components/sections/ServicePage";

const ContainerPage = () => (
  <ServicePage
    translationPrefix="pages.containers"
    features={["fast", "durable", "eco", "flexible", "mobile", "affordable"]}
    extraSection={{
      titleKey: "pages.containers.usesTitle",
      items: [
        "pages.containers.uses.residential",
        "pages.containers.uses.office",
        "pages.containers.uses.commercial",
        "pages.containers.uses.warehouse",
        "pages.containers.uses.modular",
      ],
    }}
  />
);

export default ContainerPage;
