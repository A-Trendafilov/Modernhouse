import { v4 as uuidv4 } from 'uuid';

export const heroSectionImg = [
    {
        id: uuidv4(),
        src: './assets/herosection/2-store-house.webp',
        alt: 'Beautiful two-store house',
        title: 'СГЛОБЯЕМИ КЪЩИ',
        description: 'С нашите сглобяеми къщи можете бързо и лесно да създадете уютен и функционален дом, който отговаря на вашите нужди.',
        route: "/modular"
    },
    {
        id: uuidv4(),
        src: './assets/herosection/construction.webp',
        alt: 'Construction site',
        title: 'КОНТЕЙНЕРИ',
        description: 'Използвайте нашите контейнери за да реализирате вашите идеи за жилището и бизнеса.',
        route: "/container",
    },
];
