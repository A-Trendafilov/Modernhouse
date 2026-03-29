import { motion } from "framer-motion";

import { Dialog, DialogContent } from "@/components/ui/dialog";

interface ImageLightboxProps {
  selectedImage: string | null;
  handleClose: () => void;
}

const ImageLightbox = ({ selectedImage, handleClose }: ImageLightboxProps) => {
  return (
    <Dialog open={Boolean(selectedImage)} onOpenChange={() => handleClose()}>
      <DialogContent
        className="max-w-[95vw] max-h-[95vh] p-0 bg-black/95 border border-white/10 shadow-2xl shadow-black/50"
        aria-labelledby="lightbox-image"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="flex items-center justify-center p-2"
          onClick={handleClose}
        >
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Selected"
              className="max-w-full max-h-[88vh] block mx-auto rounded-sm"
              onError={(event) => {
                const target = event.target as HTMLImageElement;
                target.onerror = null;
                target.src = "path/to/placeholder-image.jpg";
              }}
            />
          )}
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageLightbox;
