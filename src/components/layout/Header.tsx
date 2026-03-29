import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import AnimatedText from "../utils/AnimatedText";
import Logo from "./Logo";
import NavItems from "./NavItems";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  return (
    <motion.header
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        scrolled ? "glass-strong shadow-lg shadow-black/20" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex items-center justify-between px-6 py-3 max-w-7xl mx-auto">
        <Logo />

        <div className="absolute left-1/2 -translate-x-1/2 hidden sm:block">
          <AnimatedText />
        </div>

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
          <SheetContent className="w-[320px] glass-strong border-white/10 overflow-y-auto">
            <SheetTitle className="sr-only">Навигация</SheetTitle>
            <NavItems onNavigate={() => setOpen(false)} />
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
};

export default Header;
