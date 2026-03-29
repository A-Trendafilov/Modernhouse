import { useTranslation } from "react-i18next";

import type { ContactDetail } from "@/types";
import InfoList from "./InfoList";

interface ContactInfoProps {
  items: ContactDetail[];
}

const ContactInfo = ({ items }: ContactInfoProps) => {
  const { t } = useTranslation();

  return (
    <div className="max-w-[600px] mx-auto px-4 sm:px-6 md:px-8">
      <h2 className="text-3xl font-bold text-center mb-2 text-white tracking-tight">
        {t("contact.salesCenter")}
      </h2>
      <div className="flex justify-center mb-6">
        <div className="h-0.5 w-12 bg-[#B8860B]" />
      </div>
      <InfoList items={items} />
    </div>
  );
};

export default ContactInfo;
