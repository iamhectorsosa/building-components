import { recipe, type RecipeVariants } from "@vanilla-extract/recipes";
import { tokens, globalTokens } from "@themes";

const { bg, text } = tokens;
const { rounded } = globalTokens;

export const badge = recipe({
  base: {
    height: "fit-content",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 14,
    lineHeight: "20px",
    fontWeight: 500,
    paddingInline: 12,
    paddingBlock: 4,
  },

  variants: {
    variant: {
      base: { background: bg.base, color: text.base },
      neutral: { background: bg.neutral, color: text.neutral },
      primary: { background: bg.primary, color: text.primary },
      secondary: { background: bg.secondary, color: text.secondary },
      accent: { background: bg.accent, color: text.accent },
    },
    rounded: {
      sm: { borderRadius: rounded.sm },
      md: { borderRadius: rounded.md },
      lg: { borderRadius: rounded.lg },
      full: { borderRadius: rounded.full },
    },
    outline: {
      true: {
        background: "transparent",
        borderWidth: "1px",
        borderStyle: "solid",
      },
    },
  },

  compoundVariants: [
    {
      variants: {
        variant: "base",
        outline: true,
      },
      style: {
        color: bg.base,
        borderColor: bg.base,
      },
    },
    {
      variants: {
        variant: "neutral",
        outline: true,
      },
      style: {
        color: bg.neutral,
        borderColor: bg.neutral,
      },
    },
    {
      variants: {
        variant: "primary",
        outline: true,
      },
      style: {
        color: bg.primary,
        borderColor: bg.primary,
      },
    },
    {
      variants: {
        variant: "secondary",
        outline: true,
      },
      style: {
        color: bg.secondary,
        borderColor: bg.secondary,
      },
    },
    {
      variants: {
        variant: "accent",
        outline: true,
      },
      style: {
        color: bg.accent,
        borderColor: bg.accent,
      },
    },
  ],

  defaultVariants: {
    variant: "base",
  },
});

export type BadgeVariants = RecipeVariants<typeof badge>;
