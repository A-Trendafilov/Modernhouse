// navData.js
import { FaHome, FaInfoCircle, FaEnvelope } from "react-icons/fa";
import { BsImages, BsHouses, BsFillHousesFill } from "react-icons/bs";
import { GoContainer } from "react-icons/go";
import { MdWorkOutline } from "react-icons/md"

export const navItems = [
  { text: "Начало", icon: <FaHome />, path: "/" },
  { text: "За нас", icon: <FaInfoCircle />, path: "/about" },
  { text: "Контакти", icon: <FaEnvelope />, path: "/contact" },
  { text: "Контейнери", icon: <GoContainer />, path: "/container" },
  { text: "Галерия", icon: <BsImages />, path: "/gallery" },
  { text: "Стоманени къщи", icon: <BsFillHousesFill />, path: "/house/steel" },
  { text: "Модулни къщи", icon: <BsHouses />, path: "/house/modular" },
  { text: "Проекти", icon: <MdWorkOutline />, path: "/projects" },
];
