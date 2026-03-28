import { DollarSign, Truck, BadgeCheck } from "lucide-react";

import type { CardItem } from "@/types";

export const cardData: CardItem[] = [
  {
    id: "affordable-prices",
    Icon: DollarSign,
    title: "cards.affordableTitle",
    description: "cards.affordableDesc",
  },
  {
    id: "fast-delivery",
    Icon: Truck,
    title: "cards.deliveryTitle",
    description: "cards.deliveryDesc",
  },
  {
    id: "high-quality",
    Icon: BadgeCheck,
    title: "cards.qualityTitle",
    description: "cards.qualityDesc",
  },
];
