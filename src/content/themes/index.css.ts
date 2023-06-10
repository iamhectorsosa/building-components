import { createTheme } from "@vanilla-extract/css";

export const theme = "mock_theme";

// Create the default theme and the tokens for theming
export const [defaultTheme, tokens] = createTheme({
  bg: {
    base: "rgb(255, 255, 255)",
    neutral: "rgb(43, 52, 64)",
    primary: "rgb(87, 13, 248)",
    secondary: "rgb(240, 0, 184)",
    accent: "rgb(29, 205, 188)",
  },
  text: {
    base: "rgb(31, 41, 55)",
    neutral: "rgb(216, 221, 228)",
    primary: "rgb(224, 210, 254)",
    secondary: "rgb(255, 209, 244)",
    accent: "rgb(7, 49, 45)",
  },
  rounded: "6px",
});

// Grab the existing tokens and create an additional theme
export const bumblebee = createTheme(tokens, {
  bg: {
    base: "rgb(255, 255, 255)",
    neutral: "rgb(24, 24, 47)",
    primary: "rgb(249, 215, 47)",
    secondary: "rgb(224, 168, 46)",
    accent: "rgb(220, 136, 80)",
  },
  text: {
    base: "rgb(48, 48, 48)",
    neutral: "rgb(204, 203, 210)",
    primary: "rgb(24, 24, 47)",
    secondary: "rgb(24, 24, 47)",
    accent: "rgb(44, 31, 22)",
  },
  rounded: "6px",
});

export const emerald = createTheme(tokens, {
  bg: {
    base: "rgb(255, 255, 255)",
    neutral: "rgb(51, 60, 77)",
    primary: "rgb(102, 204, 138)",
    secondary: "rgb(55, 124, 251)",
    accent: "rgb(234, 82, 52)",
  },
  text: {
    base: "rgb(51, 60, 77)",
    neutral: "rgb(249, 250, 251)",
    primary: "rgb(35, 62, 49)",
    secondary: "rgb(249, 250, 251)",
    accent: "rgb(249, 250, 251)",
  },
  rounded: "6px",
});

export const pastel = createTheme(tokens, {
  bg: {
    base: "rgb(255, 255, 255)",
    neutral: "rgb(112, 172, 199)",
    primary: "rgb(209, 193, 215)",
    secondary: "rgb(246, 203, 209)",
    accent: "rgb(180, 233, 214)",
  },
  text: {
    base: "rgb(48, 48, 48)",
    neutral: "rgb(27, 35, 39)",
    primary: "rgb(42, 39, 42)",
    secondary: "rgb(46, 40, 41)",
    accent: "rgb(37, 45, 42)",
  },
  rounded: "6px",
});

export const themes = [
  { label: "Default", value: defaultTheme },
  { label: "Bumblebee", value: bumblebee },
  { label: "Emerald", value: emerald },
  { label: "Pastel", value: pastel },
];
