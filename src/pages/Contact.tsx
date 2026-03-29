import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import LazyLoad from "@/components/utils/LazyLoad";
import ContactForm from "@/components/sections/ContactForm";
import ContactInfo from "@/components/sections/ContactInfo";
import { salesDetails } from "@/data/salesData";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen px-6 py-20">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-wider text-gradient mb-4">
          {t("contact.pageTitle")}
        </h1>
        <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-brass to-transparent mx-auto" />
      </motion.div>

      <div className="flex flex-col lg:flex-row justify-between mx-auto max-w-6xl gap-12">
        <LazyLoad className="flex-1">
          <ContactForm />
        </LazyLoad>
        <LazyLoad className="flex-1">
          <ContactInfo items={salesDetails} />
        </LazyLoad>
      </div>
    </div>
  );
};

export default Contact;
