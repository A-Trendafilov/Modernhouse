import { Mail, Phone, Clock, MapPin } from "lucide-react";

import { FacebookIcon, InstagramIcon } from "@/components/icons/SocialIcons";
import type { ContactDetail, SocialLink, MapData } from "@/types";

export const companyName = "footer.companyName";

export const contactDetails: ContactDetail[] = [
  { Icon: Mail, text: "office@modernhouse.bg", href: "mailto:office@modernhouse.bg" },
  { Icon: Phone, text: "+359 899 86 33 29", href: "tel:+359899863329" },
  { Icon: Clock, text: "footer.workingHours" },
];

export const locations: ContactDetail[] = [
  { Icon: MapPin, text: "footer.production", href: "https://maps.app.goo.gl/ybdjG85FBvMr65kQ6" },
  { Icon: MapPin, text: "footer.showroom", href: "https://maps.app.goo.gl/xsGdFSeXdpZ3hJ9Y7" },
];

export const socialLinks: SocialLink[] = [
  { href: "https://www.facebook.com/people/Modern-House/100066901094241/", Icon: FacebookIcon },
  { href: "https://www.instagram.com/modernhouse_ood/?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D", Icon: InstagramIcon },
];

export const maps: MapData[] = [
  {
    title: "footer.production",
    src: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1477.349390756063!2d24.8174874!3d42.2208821!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14acd50202cd8403%3A0x3f2b4bd6dc8059d0!2z0JzQvtC00LXRgNC9INCl0LDRg9GBINCR0YrQu9Cz0LDRgNC40Y8!5e0!3m2!1sen!2sbg!4v1729065591756!5m2!1sen!2sbg",
  },
  {
    title: "footer.showroom",
    src: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d738.3653000707551!2d24.7234646!3d42.2473226!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14acd3f8cd0973f5%3A0xf3c7c20e7da7ce20!2z0JzQvtC00LXRgNC9INCl0LDRg9GBINCe0J7QlA!5e0!3m2!1sen!2sbg!4v1729065280485!5m2!1sen!2sbg",
  },
];
