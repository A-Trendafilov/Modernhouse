import { Mail, Phone, Clock } from "lucide-react";

import type { ContactDetail } from "@/types";

export const salesDetails: ContactDetail[] = [
  { Icon: Phone, text: "+359 899 86 33 29", href: "tel:+359899863329" },
  { Icon: Phone, text: "+359 876 71 17 44", href: "tel:+359876711744" },
  { Icon: Phone, text: "+359 878 78 09 21", href: "tel:+359878780921" },
  { Icon: Mail, text: "office@modernhouse.bg", href: "mailto:office@modernhouse.bg" },
  { Icon: Clock, text: "footer.workingHours" },
];
