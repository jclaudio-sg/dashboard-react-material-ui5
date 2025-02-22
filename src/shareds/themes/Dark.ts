import { createTheme } from '@mui/material';
import { cyan, yellow } from '@mui/material/colors';


export const DarkTheme = () => createTheme({
    palette: {
        primary: {
            main: yellow[700],
            light: yellow[800],
            dark: yellow[500],
            contrastText:  "#fff",
        },
        secondary: {
            main: cyan[500],
            light: cyan[400],
            dark: cyan[300],
            contrastText: "#fff",
        },
        background: {
            default: "#202124",
            paper: "#303134",
        },
    },
});


