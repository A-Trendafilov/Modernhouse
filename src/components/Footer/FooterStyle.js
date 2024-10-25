// src/components/Footer/FooterStyle.js

export const getStyles = (theme) => ({
    container: {
        backgroundColor: "transparent",
        padding: {
            xs: theme.spacing(2),
            sm: theme.spacing(3),
            md: theme.spacing(4),
        },
        marginTop: theme.spacing(2.5),
        margin: "0 auto",
    },
    title: {
        marginBottom: theme.spacing(2), // Adjusted for better spacing
        color: theme.palette.text.primary,
    },
    infoContainer: {
        flex: 1,
        maxWidth: { xs: "100%", md: "50%" }, // Make it occupy 50% on medium and larger screens
    },
    infoList: {
        boxStyle: { marginBottom: theme.spacing(4) },
        textStyle: {
            fontSize: { xs: "0.875rem", sm: "1rem" },
            color: theme.palette.text.primary,
        },
        iconColor: theme.palette.text.primary,
        linkColor: theme.palette.text.primary,
        motionProps: {
            whileHover: { scale: 1.05, color: theme.palette.action.hover },
            transition: { duration: 0.3 },
        },
    },
    mapContainer: {
        flex: 1,
        display: "flex",
        flexDirection: { xs: "column", md: "row" }, // Keep the maps in a row for larger screens
        gap: 2,
    },
    mapBox: {
        flex: 1, // Allow map boxes to grow
        overflow: "hidden",
        transition: "transform 0.3s ease",
        "&:hover": {
            transform: "scale(1.05)",
        },
    },
});
