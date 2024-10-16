// navData.js
import { FaHome, FaInfoCircle, FaEnvelope, FaWarehouse } from "react-icons/fa";
import { GiModernCity, GiSteelClaws } from "react-icons/gi";
import { BsImages } from "react-icons/bs";

export const navItems = [
  { text: "Начало", icon: <FaHome />, path: "/" },
  { text: "За нас", icon: <FaInfoCircle />, path: "/about" },
  { text: "Контакти", icon: <FaEnvelope />, path: "/contact" },
  { text: "Контейнери", icon: <FaWarehouse />, path: "/container" },
  { text: "Галерия", icon: <BsImages />, path: "/gallery" },
  { text: "Стоманени къщи", icon: <GiSteelClaws />, path: "/house/steel" },
  { text: "Сглобяеми къщи", icon: <GiModernCity />, path: "/house/modern" },
];
