import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'light', // Set the theme mode to light
        background: {
            default: 'transparent', // Set default background to transparent for gradient
            main: '#333333',
        },
        primary: {
            main: '#000000', // Black primary color
        },
        secondary: {
            main: '#FFFFFF', // White secondary color
        },
        action: {
            hover: '#007BFF', // Blue hover effect
            light: '#FFFFFF'
        },
        text: {
            primary: '#000000', // Black for primary text
            secondary: '#FFFFFF', // White for secondary text
        },
        divider: '#000000', // Black divider
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', // Consistent font family
        h1: {
            fontSize: '2.5rem',
            fontWeight: 700,
            color: '#000000', // Black for headings
        },
        h2: {
            fontSize: '2rem',
            fontWeight: 700,
            color: '#000000', // Black for headings
        },
        body1: {
            fontSize: '1rem',
            color: '#000000', // Dark gray for body text
        },
        body2: {
            fontSize: '0.875rem',
            color: '#000000', // Dark gray for body text
        },
        button: {
            fontWeight: 600,
            textTransform: 'uppercase',
            color: '#000000', // Black for button text
            '&:hover': {
                backgroundColor: '#007BFF', // Blue background on hover
                color: '#FFFFFF', // White text on hover
            },
        },
    },
    shape: {
        borderRadius: 4, // Border radius for a modern look
    },
    components: {
        // Custom styles to override default `CssBaseline` styles
        MuiCssBaseline: {
            styleOverrides: {
                html: {
                    height: '100%',
                },
                body: {
                    height: '100vh', // Ensure body covers full height
                    margin: 0, // Remove default margin
                    padding: 0, // Remove default padding
                    display: 'flex', // Use flex to align children
                    flexDirection: 'column', // Ensure children stack vertically
                    background: 'linear-gradient(to right, #ebebeb, #333333)', // Gradient background
                },
                main: {
                    flex: 1, // Allow main content to grow
                    display: 'flex', // Use flex for main content layout
                    flexDirection: 'column', // Ensure children stack vertically
                },
            }
        }
    }
});

export default theme;
