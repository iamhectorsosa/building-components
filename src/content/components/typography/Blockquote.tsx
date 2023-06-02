import * as React from "react";
import { cn } from "@utils/cn";

const Blockquote = React.forwardRef<
  HTMLQuoteElement,
  React.QuoteHTMLAttributes<HTMLQuoteElement>
>((props, ref) => {
  const { children, className, ...otherProps } = props;
  return (
    <blockquote
      className={cn(
        [
          "px-9 py-6 text-xl font-semibold leading-loose text-neutral-900 lg:px-12 lg:text-2xl",
          "[&>cite]:inline-block [&>cite]:py-4 [&>cite]:before:content-['—_']",
        ],
        className
      )}
      ref={ref}
      {...otherProps}
    >
      {children}
    </blockquote>
  );
});

Blockquote.displayName = "Blockquote";

export { Blockquote };
