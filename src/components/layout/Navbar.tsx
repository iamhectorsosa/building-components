"use client";

import * as React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@components/ui/Select";
import { themes } from "@themes";
import { Paintbrush2 } from "lucide-react";
import { useTheme } from "@components/context/ThemeProvider";

export const Navbar = () => {
  const [theme, setTheme] = useTheme();
  return (
    <div className="sticky top-0 z-50 flex w-full border-b border-neutral-100 bg-white px-4 pb-4 pt-8">
      <nav className="mx-auto w-full max-w-5xl">
        <div className="flex justify-end">
          <Select value={theme} onValueChange={(v) => setTheme(v)}>
            <SelectTrigger className="w-[180px]">
              <div className="flex items-center gap-2">
                <Paintbrush2 className="h-4 w-4 text-neutral-700" />
                <SelectValue />
              </div>
            </SelectTrigger>
            <SelectContent>
              {themes.map(({ label, value }) => (
                <SelectItem key={value} value={value}>
                  {label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </nav>
    </div>
  );
};
