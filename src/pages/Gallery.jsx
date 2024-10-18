import React, { lazy, Suspense } from "react";

// Lazy load the ImgGallery component
const ImgGallery = lazy(() => import("../components/Gallery/ImgGallery"));

const Gallery = () => {
  return (
    <div className="gallery-page">
      <Suspense fallback={<div>Loading gallery...</div>}>
        <ImgGallery />
      </Suspense>
    </div>
  );
};

export default Gallery;
