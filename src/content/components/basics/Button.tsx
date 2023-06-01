import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@utils/cn";
import { Loader2Icon } from "lucide-react";

const buttonVariants = cva(
  [
    /** General Styles */
    "inline-flex items-center gap-2.5 justify-center rounded-md text-sm font-medium transition-colors h-fit px-5 py-2.5",
    /** Focused Styles */
    "ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 focus-visible:ring-offset-2",
    /** Disabled Styles */
    "disabled:pointer-events-none disabled:opacity-50",
    /** Icon Styles */
    "[&>svg]:h-5 [&>svg]:w-5 [&>svg]:-mx-1",
  ],
  {
    variants: {
      variant: {
        primary:
          "bg-neutral-700 text-neutral-100 hover:bg-neutral-800 active:bg-neutral-900",
        subtle:
          "bg-transparent text-neutral-900 hover:bg-neutral-200 active:bg-neutral-300",
        link: "bg-transparent text-neutral-600 hover:underline underline-offset-4",
        warning:
          "bg-yellow-500 text-neutral-900 hover:bg-yellow-400 active:bg-yellow-600",
        danger:
          "bg-red-600 text-neutral-100 hover:bg-red-700 active:bg-red-800",
      },
      compact: {
        true: "px-4 py-1.5 [&>svg]:h-4 [&>svg]:w-4",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant,
      compact,
      asChild = false,
      isLoading = false,
      iconLeft,
      iconRight,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, compact, className }))}
        ref={ref}
        {...props}
      >
        {isLoading && !iconRight ? <Loader2Icon className={cn("animate-spin")} /> : iconLeft}
        {children}
        {isLoading && iconRight ? <Loader2Icon className={cn("animate-spin")} /> : iconRight}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button };
