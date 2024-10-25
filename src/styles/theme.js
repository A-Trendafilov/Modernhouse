import { createTheme } from '@mui/material/styles';
import { light } from '@mui/material/styles/createPalette';

const theme = createTheme({
    palette: {
        primary: {
            main: '#000000',// Main shade of primary
            dark: '#333333'
        },
        secondary: {
            main: '#FFFFFF',  // Main shade of secondary
        },
        accent: {
            main: '#007BFF',
            dark: '#000000',
            light: "#FFFFFF"
        },
        highlight: {
            main: '#66B3FF',
            light: '#FFFFFF', // Lighter Blue for highlights
            red: "#000000"
        },
        divider: '#000000', // Black for dividers
        text: {
            primary: '#000000', // Black primary text
            secondary: '#FFFFFF', // White secondary text
            active: '#d8e2dc'
        },
        action: {
            hover: '#0056b3',
            light: '#FFFFFF',// Darker blue for hover effects
            active: '#004494', // Even darker blue for active state
        },
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
            fontSize: '2.5rem',
            fontWeight: 700,
            color: '#e5e5e5', // Blue for h1 headings
            transition: 'color 0.3s ease', // Smooth transition for hover
            '&:hover': {
                color: '#DC2F02', // Lighten on hover
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
            color: '#e5e5e5', // Blue for h3 headings
            transition: 'color 0.3s ease', // Smooth transition for hover
            '&:hover': {
                color: '#DC2F02', // Lighten on hover
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
            transition: 'color 0.3s ease', // Smooth transition for hover
            '&:hover': {
                color: '#003366', // Change to white on hover
            },
        },
        button: {
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
            color: '#333333', // Default button text
            transition: 'background-color 0.3s ease, transform 0.3s ease', // Smooth button transitions
            '&:hover': {
                backgroundColor: '#d00000', // Darker blue on hover
                transform: 'scale(1.05)', // Slightly scale on hover
            },
        },
    },
    shape: {
        borderRadius: 4, // Slightly larger border radius for a modern look
    },
});

export default theme;
