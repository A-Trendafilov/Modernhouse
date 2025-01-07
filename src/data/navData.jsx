import { FaHome, FaInfoCircle, FaEnvelope, FaLayerGroup } from "react-icons/fa";
import { BsImages, BsHouses, BsFillHousesFill } from "react-icons/bs";
import { GoContainer } from "react-icons/go";
import { MdWorkOutline, MdOtherHouses } from "react-icons/md";
import { GiIBeam } from "react-icons/gi";
import { LiaDoorOpenSolid } from "react-icons/lia";

export const navItems = [
  { text: "Начало", icon: <FaHome />, path: "/" },
  {
    text: "Сглобяеми къщи",
    icon: <BsFillHousesFill />,
    subItems: [
      {
        text: "Прес-панел система",
        icon: <FaLayerGroup />,
        path: "/sip",
      },
      {
        text: "Изцяло метална система",
        icon: <GiIBeam />,
        path: "/metal",
      },
    ],
  },
  { text: "Модулни къщи", icon: <BsHouses />, path: "/modular" },
  { text: "Автономни къщи", icon: <MdOtherHouses />, path: "/tiny" },
  { text: "Контейнери", icon: <GoContainer />, path: "/container" },
  {
    text: "Дограма",
    icon: <LiaDoorOpenSolid />,
    subItems: [
      {
        text: "Алуминиева",
        icon: <LiaDoorOpenSolid />,
        path: "/аluminum",
      },
      {
        text: "ПВЦ",
        icon: <LiaDoorOpenSolid />,
        path: "/pvc",
      },
    ],
  },
  { text: "Галерия", icon: <BsImages />, path: "/gallery" },
  { text: "Проекти", icon: <MdWorkOutline />, path: "/projects" },
  { text: "За нас", icon: <FaInfoCircle />, path: "/about" },
  { text: "Контакти", icon: <FaEnvelope />, path: "/contact" },
];
