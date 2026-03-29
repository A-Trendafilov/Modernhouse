import {
  Home,
  Info,
  Mail,
  Layers,
  Images,
  Building2,
  Warehouse,
  Briefcase,
  Construction,
  DoorOpen,
  Box,
} from "lucide-react";

import type { NavItem } from "@/types";

export const navItems: NavItem[] = [
  { text: "nav.home", icon: <Home className="h-5 w-5" />, path: "/" },
  {
    text: "nav.prefabHouses",
    icon: <Building2 className="h-5 w-5" />,
    subItems: [
      { text: "nav.pressPanel", icon: <Layers className="h-5 w-5" />, path: "/sip" },
      { text: "nav.metalSystem", icon: <Construction className="h-5 w-5" />, path: "/metal" },
    ],
  },
  { text: "nav.modularHouses", icon: <Warehouse className="h-5 w-5" />, path: "/modular" },
  { text: "nav.tinyHouses", icon: <Home className="h-5 w-5" />, path: "/tiny" },
  { text: "nav.containers", icon: <Box className="h-5 w-5" />, path: "/container" },
  {
    text: "nav.joinery",
    icon: <DoorOpen className="h-5 w-5" />,
    subItems: [
      { text: "nav.aluminum", icon: <DoorOpen className="h-5 w-5" />, path: "/аluminum" },
      { text: "nav.pvc", icon: <DoorOpen className="h-5 w-5" />, path: "/pvc" },
    ],
  },
  { text: "nav.gallery", icon: <Images className="h-5 w-5" />, path: "/gallery" },
  { text: "nav.projects", icon: <Briefcase className="h-5 w-5" />, path: "/projects" },
  { text: "nav.about", icon: <Info className="h-5 w-5" />, path: "/about" },
  { text: "nav.contact", icon: <Mail className="h-5 w-5" />, path: "/contact" },
];
