import { createGlobalTheme } from "@vanilla-extract/css";

export const globalTokens = createGlobalTheme(":root", {
  rounded: {
    sm: "2px",
    md: "6px",
    lg: "12px",
    full: "9999px",
  },
});
