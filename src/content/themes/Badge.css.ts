import { style, styleVariants } from "@vanilla-extract/css";
import { tokens } from "@themes";

// We can destruct and take what we need
const { background, color } = tokens;

const badgeBase = style([
  {
    height: "fit-content",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
    fontSize: 14,
    lineHeight: "20px",
    fontWeight: 500,
    paddingInline: 12,
    paddingBlock: 4,
  },
]);

export const badgeVariants = styleVariants({
  primary: [
    badgeBase,
    { background: background.primary, color: color.primary },
  ],
  warning: [
    badgeBase,
    { background: background.warning, color: color.warning },
  ],
  danger: [badgeBase, { background: background.danger, color: color.danger }],
});
