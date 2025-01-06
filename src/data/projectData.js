// src/data/projectData.js

import { v4 as uuidv4 } from 'uuid';

export const projectData = [
    {
        id: uuidv4(),
        title: 'Modern Villa',
        description: 'A beautiful modern villa with a pool and garden.',
        image: '/images/modern-villa.jpg',
        link: '/projects/1',
        category: 'Villa',
    },
    {
        id: uuidv4(),
        title: 'Steel House',
        description: 'A robust steel house with industrial design elements.',
        image: '/images/steel-house.jpg',
        link: '/projects/2',
        category: 'House',
    },
    {
        id: uuidv4(),
        title: 'Modular House',
        description: 'An eco-friendly modular home with flexible spaces.',
        image: '/images/modular-house.jpg',
        link: '/projects/3',
        category: 'House',
    },
    // Add more projects with categories
];
