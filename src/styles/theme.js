// src/styles/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#333333', // Dark Charcoal
        },
        secondary: {
            main: '#FFFFFF', // Soft White
        },
        accent: {
            main: '#007BFF', // Blue for accent
            contrastText: '#FFFFFF', // White for contrast on accent
        },
        highlight: {
            main: '#66B3FF', // Lighter Blue for highlights
        },
        divider: '#B0B0B0', // Gray for dividers
        text: {
            primary: '#E0E0E0', // Light Gray for primary text
            secondary: '#A0A0A0', // Slightly darker gray for secondary text
        },
        action: {
            hover: '#0056b3', // Darker blue for hover effects
            active: '#004494', // Even darker blue for active state
        },
        background: {
            default: '#1A1A1A', // Dark background
            paper: '#2A2A2A', // Slightly lighter dark background
        },
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
            fontSize: '2.5rem',
            fontWeight: 700,
            color: '#007BFF', // Blue for h1 headings
            transition: 'color 0.3s ease', // Smooth transition for hover
            '&:hover': {
                color: '#66B3FF', // Lighten on hover
            },
        },
        h2: {
            fontSize: '2rem',
            fontWeight: 700,
            color: '#FFFFFF', // Soft White for h2 headings
            transition: 'color 0.3s ease', // Smooth transition for hover
            '&:hover': {
                color: '#66B3FF', // Lighten on hover
            },
        },
        h3: {
            fontSize: '1.75rem',
            fontWeight: 600,
            color: '#007BFF', // Blue for h3 headings
            transition: 'color 0.3s ease', // Smooth transition for hover
            '&:hover': {
                color: '#66B3FF', // Lighten on hover
            },
        },
        body1: {
            fontSize: '1rem',
            color: '#E0E0E0', // Light Gray for body text
            transition: 'color 0.3s ease', // Smooth transition for hover
            '&:hover': {
                color: '#FFFFFF', // Change to white on hover
            },
        },
        body2: {
            fontSize: '0.875rem',
            color: '#E0E0E0', // Light Gray for secondary body text
            transition: 'color 0.3s ease', // Smooth transition for hover
            '&:hover': {
                color: '#FFFFFF', // Change to white on hover
            },
        },
        button: {
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            color: '#FFFFFF', // Default button text
            transition: 'background-color 0.3s ease, transform 0.3s ease', // Smooth button transitions
            '&:hover': {
                backgroundColor: '#0056b3', // Darker blue on hover
                transform: 'scale(1.05)', // Slightly scale on hover
            },
        },
    },
    shape: {
        borderRadius: 4, // Slightly larger border radius for a modern look
    },
});

export default theme;
