export const getNavItemsStyle = (theme) => ({
    listItem: {
        textDecoration: "none",
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(2),
        borderRadius: 5,
        transition: "background-color 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
            backgroundColor: theme.palette.action.hover,
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
        },
        "&.active": {
            backgroundColor: theme.palette.action.hover,
            fontWeight: "bold",
        },
    },
    listItemIcon: {
        color: theme.palette.text.secondary,
    },
    listItemText: {
        color: theme.palette.text.secondary,
    },
    subItem: {
        textDecoration: "none",
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(2),
        borderRadius: 5,
        transition: "background-color 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
            backgroundColor: theme.palette.action.hover,
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
        },
        "&.active": {
            backgroundColor: theme.palette.action.hover,
            fontWeight: "bold",
        },
    },
    collapse: {
        transition: "height 0.3s ease",
    },
    collapseIcon: {
        color: "white",
    },
});
