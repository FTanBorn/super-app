import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const darkTheme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#123452",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#544522",
      contrastText: "#ffffff",
    },
    info: {
      main: "#8A8A8A",
      contrastText: "#ffffff",
    },
    success: {
      main: "#4caf50",
      contrastText: "#ffffff",
    },
    warning: {
      main: "#ff9800",
      contrastText: "#000000",
    },
    error: {
      main: "#f44336",
      contrastText: "#ffffff",
    },
    text: {
      primary: "#ffffff",
      secondary: "#b0b0b0",
      disabled: "#808080",
    },
    background: {
      default: "#000000",
      paper: "#121212",
    },
    divider: "#424242",
  },
});

const lightTheme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#dc004e",
      contrastText: "#ffffff",
    },
    info: {
      main: "#0288d1",
      contrastText: "#ffffff",
    },
    success: {
      main: "#2e7d32",
      contrastText: "#ffffff",
    },
    warning: {
      main: "#ed6c02",
      contrastText: "#000000",
    },
    error: {
      main: "#d32f2f",
      contrastText: "#ffffff",
    },
    text: {
      primary: "#000000",
      secondary: "#5f5f5f",
      disabled: "#9e9e9e",
    },
    background: {
      default: "#ffffff",
      paper: "#f5f5f5",
    },
    divider: "#e0e0e0",
  },
});

export { darkTheme, lightTheme };
