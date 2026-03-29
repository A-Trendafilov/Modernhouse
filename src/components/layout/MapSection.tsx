import React from "react";

interface MapSectionProps {
  title: string;
  src: string;
}

const MapSection = React.memo(({ title, src }: MapSectionProps) => {
  return (
    <div className="glass rounded-xl overflow-hidden group">
      <h3 className="font-display text-xl tracking-wider text-white/80 text-center py-4">
        {title}
      </h3>
      <div className="px-4 pb-4">
        <iframe
          title={title}
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
