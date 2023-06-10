"use client";

import { themes } from "@themes";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import * as React from "react";

type ThemeContextType = [string, (theme: string) => void];

const defaultTheme = themes[0].value;

const ThemeContext = React.createContext<ThemeContextType>([
  defaultTheme,
  () => undefined,
]);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [theme, setTheme] = React.useState(
    searchParams.get("th") ?? defaultTheme
  );

  const createQueryString = React.useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams as Record<string, any>);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  React.useEffect(() => {
    router.push(pathname + "?" + createQueryString("th", theme));
  }, [createQueryString, pathname, router, theme]);

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return React.useContext(ThemeContext);
};
