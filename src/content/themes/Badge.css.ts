import { tokens } from "@themes";
import { recipe, type RecipeVariants } from "@vanilla-extract/recipes";

// We can destruct and take what we need
const { background, color } = tokens;

export const badge = recipe({
  base: {
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

  variants: {
    variant: {
      primary: { background: background.primary, color: color.primary },
      warning: { background: background.warning, color: color.warning },
      danger: { background: background.danger, color: color.danger },
    },
  },

  defaultVariants: {
    variant: "primary",
  },
});

export type BadgeVariants = RecipeVariants<typeof badge>;
