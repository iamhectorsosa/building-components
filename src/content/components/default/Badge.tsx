// Exact copy
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { badgeVariants } from "@themes/Badge.css";
import { cn } from "@utils/cn";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof badgeVariants;
  asChild?: boolean;
}

const Badge = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "span";
    return (
      <Comp
        className={cn(badgeVariants[variant], className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Badge.displayName = "Badge";

export { Badge };
