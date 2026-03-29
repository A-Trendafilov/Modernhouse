import { lazy, Suspense } from "react";

import Loading from "@/components/utils/Loading";

const ImgGallery = lazy(() => import("@/components/sections/ImgGallery"));

const Gallery = () => {
  return (
    <div className="min-h-screen w-full">
      <Suspense fallback={<Loading />}>
        <ImgGallery />
      </Suspense>
    </div>
  );
};

export default Gallery;
