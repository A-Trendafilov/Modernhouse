import { v4 as uuidv4 } from "uuid";
import { FaDollarSign, FaCheckDouble } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";

export const cardData = [
  {
    id: uuidv4(),
    Icon: FaDollarSign,
    title: "Достъпни цени",
    description:
      "Достъпни цени, които ви позволяват да осъществите вашите идеи, без да натоварвате значително бюджета си.",
  },

  {
    id: uuidv4(),
    Icon: FaTruckFast,
    title: "Бързи доставки",
    description:
      "Гарантираме бързи доставки, за да ви предоставим желаните продукти в най-кратък срок.",
  },

  {
    id: uuidv4(),
    Icon: FaCheckDouble,
    title: "Високо качество",
    description:
      "Всеки продукт, който предлагаме, отговаря на най-високите стандарти на издръжливост и изпълнение.",
  },
];
