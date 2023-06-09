import { createTheme } from "@vanilla-extract/css";

// Create the default theme and the tokens for theming
export const [defaultTheme, tokens] = createTheme({
  background: {
    primary: "#2563eb",
    warning: "#f59e0b",
    danger: "#ef4444",
  },
  color: {
    primary: "#fafafa",
    warning: "#171717",
    danger: "#fafafa",
  },
});

// Grab the existing tokens and create an additional theme
export const darkTheme = createTheme(tokens, {
  background: {
    primary: "#1e40af",
    warning: "#92400e",
    danger: "#991b1b",
  },
  color: {
    primary: "#fafafa",
    warning: "#fafafa",
    danger: "#fafafa",
  },
});

export const theme = "mock_theme";
