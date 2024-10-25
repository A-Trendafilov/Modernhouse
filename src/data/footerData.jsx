// src/data/footerData.js
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

export const companyName = "Модерн Хаус";

export const contactDetails = [
  {
    Icon: EmailIcon,
    text: <a href="mailto:office@modernhouse.bg">office@modernhouse.bg</a>,
  },
  {
    Icon: PhoneIcon,
    text: <a href="tel:+359 899 86 33 29">+359 899 86 33 29</a>,
  },
  {
    Icon: AccessTimeIcon,
    text: "Работно време: Пон-Пет - 09:00ч. - 17:00ч.",
  },
];

export const locations = [
  {
    text: <a href="https://maps.app.goo.gl/ybdjG85FBvMr65kQ6">Производство</a>,
    Icon: LocationOnIcon,
  },
  {
    text: <a href="https://maps.app.goo.gl/xsGdFSeXdpZ3hJ9Y7">Шоурум</a>,
    Icon: LocationOnIcon,
  },
];

export const socialLinks = [
  {
    href: "https://www.facebook.com/people/Modern-House/100066901094241/",
    Icon: FacebookIcon,
  },
  {
    href: "https://www.instagram.com/modernhouse_ood/?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D",
    Icon: InstagramIcon,
  },
];

export const maps = [
  {
    title: "Производствo",
    src: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1477.349390756063!2d24.8174874!3d42.2208821!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14acd50202cd8403%3A0x3f2b4bd6dc8059d0!2z0JzQvtC00LXRgNC9INCl0LDRg9GBINCR0YrQu9Cz0LDRgNC40Y8!5e0!3m2!1sen!2sbg!4v1729065591756!5m2!1sen!2sbg",
  },
  {
    title: "Шоурум",
    src: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d738.3653000707551!2d24.7234646!3d42.2473226!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14acd3f8cd0973f5%3A0xf3c7c20e7da7ce20!2z0JzQvtC00LXRgNC9INCl0LDRg9GBINCe0J7QlA!5e0!3m2!1sen!2sbg!4v1729065280485!5m2!1sen!2sbg",
  },
];
