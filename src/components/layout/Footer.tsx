import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import LazyLoad from "../utils/LazyLoad";
import InfoList from "../sections/InfoList";
import SocialIcons from "../sections/SocialIcons";
import HorizontalDivider from "./HorizontalDivider";
import {
  locations,
  contactDetails,
  socialLinks,
  maps,
  companyName,
} from "@/data/footerData";
import MapSection from "./MapSection";
import Copyright from "./Copyright";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="relative px-6 sm:px-8 md:px-12 pt-16 pb-8 mt-20">
      <div className="max-w-7xl mx-auto">
        <HorizontalDivider />

        <div className="flex flex-col lg:flex-row justify-between gap-12">
          <motion.div
            className="flex-1 lg:max-w-[45%]"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-display text-2xl tracking-wider text-brass mb-6">{t("footer.contactUs")}</h3>
            <InfoList items={contactDetails} />

            <h3 className="font-display text-2xl tracking-wider text-brass mb-6 mt-8">{t("footer.ourLocations")}</h3>
            <InfoList items={locations} />

            <h3 className="font-display text-2xl tracking-wider text-brass mb-6 mt-8">{t("footer.followUs")}</h3>
            <SocialIcons socialLinks={socialLinks} />
          </motion.div>

          <motion.div
            className="flex-1 flex flex-col md:flex-row gap-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {maps.map((map, index) => (
              <div key={index} className="flex-1 overflow-hidden rounded-xl">
                <LazyLoad>
                  <MapSection title={map.title} src={map.src} />
                </LazyLoad>
              </div>
            ))}
          </motion.div>
        </div>

        <HorizontalDivider />

        <LazyLoad>
          <Copyright companyName={t("footer.companyName")} />
        </LazyLoad>
      </div>
    </footer>
  );
};

export default Footer;
