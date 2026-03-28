import type { ComponentType, ReactNode } from "react";

export interface NavSubItem {
  text: string;
  icon: ReactNode;
  path: string;
}

export interface NavItem {
  text: string;
  icon: ReactNode;
  path?: string;
  subItems?: NavSubItem[];
}

export interface HeroImage {
  id: string;
  src: string;
  alt: string;
  title: string;
  description: string;
  route: string;
}

export interface CardItem {
  id: string;
  Icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export interface ContactDetail {
  Icon: ComponentType<{ className?: string }>;
  text: string;
  href?: string;
}

export interface SocialLink {
  href: string;
  Icon: ComponentType<{ className?: string }>;
}

export interface MapData {
  title: string;
  src: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  title: string;
  category: string;
}

export interface ProjectSpec {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  link: string;
  category: string;
  specs: ProjectSpec[];
  features: string[];
  gallery: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}
