import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { badge, type BadgeVariants } from "@themes/Badge.css";
import { cn } from "@utils/cn";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  BadgeVariants & { asChild?: boolean };

const Badge = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, rounded, outline, asChild = false, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : "span";
    return (
      <Comp
        className={cn(badge({ variant, rounded, outline }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Badge.displayName = "Badge";

export { Badge };
