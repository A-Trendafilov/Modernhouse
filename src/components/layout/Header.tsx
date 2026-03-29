import { useState } from "react";
import { Menu } from "lucide-react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useTranslation } from "react-i18next";

import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

import AnimatedText from "../utils/AnimatedText";
import Logo from "./Logo";
import NavItems from "./NavItems";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const { i18n } = useTranslation();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "bg" ? "en" : "bg");
  };

  return (
    <motion.header
      className={`sticky top-0 z-50 w-full transition-all duration-500 border-b ${
        scrolled
          ? "bg-background/95 backdrop-blur-xl border-white/10 shadow-lg shadow-black/30"
          : "bg-background/80 backdrop-blur-md border-white/5"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex items-center justify-between px-4 sm:px-6 py-2 sm:py-3 max-w-7xl mx-auto">
        <Logo />

        <div className="absolute left-1/2 -translate-x-1/2 hidden sm:block">
          <AnimatedText />
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 px-2 py-1 rounded-md text-xs font-bold tracking-wider transition-colors duration-300 text-white/60 hover:text-brass"
          >
            <span className={i18n.language === "bg" ? "text-brass" : "text-white/40"}>BG</span>
            <span className="text-white/20">/</span>
            <span className={i18n.language === "en" ? "text-brass" : "text-white/40"}>EN</span>
          </button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-white/80 hover:text-brass hover:bg-white/5 transition-colors duration-300"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[300px] sm:w-[320px] bg-background/95 backdrop-blur-xl border-white/10 overflow-y-auto">
              <SheetTitle className="sr-only">Navigation</SheetTitle>
              <NavItems onNavigate={() => setOpen(false)} />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
