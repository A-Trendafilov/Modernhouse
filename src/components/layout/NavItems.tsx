import { useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { ChevronDown, ChevronUp, Palette } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { cn } from "@/lib/utils";
import { navItems } from "@/data/navData";
import type { NavItem } from "@/types";

interface NavItemsProps {
  onNavigate: () => void;
}

const navLinkBase =
  "flex items-center gap-3 px-4 py-3 rounded-lg text-white/60 transition-all duration-300 hover:bg-white/5 hover:text-brass";

const activeLink = "bg-white/10 text-brass font-semibold";

const NavItems = ({ onNavigate }: NavItemsProps) => {
  const { t } = useTranslation();
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  const toggleSection = (text: string) => {
    setOpenSections((previous) => ({ ...previous, [text]: !previous[text] }));
  };

  const renderNavItem = (item: NavItem, index: number) => {
    if (item.subItems) {
      return (
        <motion.div
          key={item.text}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.05 }}
        >
          <button
            onClick={() => toggleSection(item.text)}
            className={cn(navLinkBase, "w-full justify-between")}
          >
            <span className="flex items-center gap-3">
              {item.icon}
              {t(item.text)}
            </span>
            {openSections[item.text] ? (
              <ChevronUp className="h-4 w-4 text-brass" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </button>

          <AnimatePresence>
            {openSections[item.text] && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="ml-4 mt-1 space-y-1 overflow-hidden"
              >
                {item.subItems.map((subItem) => (
                  <NavLink
                    key={subItem.text}
                    to={subItem.path}
                    onClick={onNavigate}
                    className={({ isActive }) =>
                      cn(navLinkBase, "text-sm", isActive && activeLink)
                    }
                  >
                    {subItem.icon}
                    {t(subItem.text)}
                  </NavLink>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      );
    }

    return (
      <motion.div
        key={item.text}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.05 }}
      >
        <NavLink
          to={item.path!}
          onClick={onNavigate}
          className={({ isActive }) => cn(navLinkBase, isActive && activeLink)}
        >
          {item.icon}
          {t(item.text)}
        </NavLink>
      </motion.div>
    );
  };

  return (
    <nav className="flex flex-col gap-1 py-6">
      <p className="px-4 mb-4 text-xs uppercase tracking-[0.2em] text-white/30 font-display">
        {t("nav.label")}
      </p>
      {navItems.map((item, index) => renderNavItem(item, index))}

      <div className="mt-4 pt-4 border-t border-white/10">
        <a
          href={`${import.meta.env.BASE_URL}preview.html`}
          onClick={onNavigate}
          className={cn(navLinkBase, "text-brass/60 hover:text-brass")}
        >
          <Palette className="h-5 w-5" />
          Color Preview
        </a>
      </div>
    </nav>
  );
};

export default NavItems;
