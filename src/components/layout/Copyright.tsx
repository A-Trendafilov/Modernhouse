import { useTranslation } from "react-i18next";

interface CopyrightProps {
  companyName: string;
}

const Copyright = ({ companyName }: CopyrightProps) => {
  const { t } = useTranslation();

  return (
    <div className="text-center py-4">
      <p className="text-white/40 text-sm tracking-wide">
        &copy; {new Date().getFullYear()}{" "}
        <span className="text-brass">{companyName}</span>. {t("footer.allRightsReserved")}
      </p>
    </div>
  );
};

export default Copyright;
