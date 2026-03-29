import React from "react";
import { useTranslation } from "react-i18next";

interface MapSectionProps {
  title: string;
  src: string;
}

const MapSection = React.memo(({ title, src }: MapSectionProps) => {
  const { t } = useTranslation();

  return (
    <div className="glass rounded-xl overflow-hidden group">
      <h3 className="font-display text-xl tracking-wider text-white/80 text-center py-4">
        {t(title)}
      </h3>
      <div className="px-4 pb-4">
        <iframe
          title={t(title)}
          src={src}
          width="100%"
          height="280"
          className="rounded-lg transition-transform duration-500 group-hover:scale-[1.02]"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
});

MapSection.displayName = "MapSection";

export default MapSection;
