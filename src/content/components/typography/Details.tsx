import * as React from "react";
import { cn } from "@utils/cn";

const Details = React.forwardRef<
  HTMLDetailsElement,
  React.DetailsHTMLAttributes<HTMLDetailsElement>
>((props, ref) => {
  const { children, className, ...otherProps } = props;
  return (
    <details
      className={cn(
        [
          "open:pb-4 text-neutral-900",
          "[&>summary]:inline-flex [&>summary]:w-full [&>summary]:py-4 [&>summary]:font-semibold [&>summary]:text-lg",
          "[&>summary]:list-none [&>summary]:after:content-['+'] [&>summary]:after:ml-auto [&>summary]:after:text-2xl [&>summary]:after:leading-none [&>summary]:after:open:rotate-45 [&>summary]:after:transition-transform [&>summary]:after:duration-300",
          "[&>cite]:inline-block [&>cite]:py-4 [&>cite]:before:content-['—_']",
        ],
        className
      )}
      ref={ref}
      {...otherProps}
    >
      {children}
    </details>
  );
});

Details.displayName = "Details";

export { Details };
