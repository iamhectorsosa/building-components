"use client";

import * as React from "react";
import { CodeIcon, EyeIcon } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/Tabs";
import { CopyButton } from "./CopyButton";
import { Resizable } from "re-resizable";
import { Button } from "./ui/Button";
import { cn } from "@utils/cn";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/Select";

import { defaultTheme, darkTheme } from "@themes";

export const Preview = ({
  id,
  component,
  preview,
  source,
}: {
  id: string;
  component: React.ReactNode;
  preview: string;
  source: string;
}) => {
  const [code, setCode] = React.useState("");
  const [expanded, setExpanded] = React.useState(false);
  const [theme, setTheme] = React.useState<"light" | "dark">("light");

  return (
    <div className="space-y-3">
      <Tabs defaultValue="preview" orientation="horizontal">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">
            {transformComponentName(id)}
          </h3>
          <div className="flex items-center gap-2">
            <Select
              value={theme}
              onValueChange={(v) => setTheme(v as "light" | "dark")}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
              </SelectContent>
            </Select>
            <TabsList className="rounded-full">
              <TabsTrigger value="preview" className="rounded-full p-2">
                <EyeIcon className="h-4 w-4" />
              </TabsTrigger>
              <TabsTrigger value="code" className="rounded-full p-2">
                <CodeIcon className="h-4 w-4" />
              </TabsTrigger>
            </TabsList>
          </div>
        </div>
        <TabsContent value="preview">
          <Resizable
            bounds="parent"
            minWidth="320px"
            handleStyles={{
              right: {
                right: "initial",
                left: "100%",
                paddingLeft: "0.25rem",
                paddingRight: "0.25rem",
                width: "auto",
                cursor: "ew-resize",
              },
            }}
            handleClasses={{
              right:
                "hidden sm:flex items-center bg-slate-50 -ml-3 rounded-r-md",
            }}
            handleComponent={{
              right: <div className="h-8 w-1.5 rounded-full bg-slate-400" />,
            }}
          >
            <div
              className={cn(
                "grid min-h-[350px] w-full place-items-center bg-slate-50 p-4 shadow-sm @container md:p-12",
                theme === "light" ? defaultTheme : darkTheme
              )}
            >
              {component}
            </div>
          </Resizable>
        </TabsContent>
        <TabsContent className="relative" value="code">
          <div
            className={cn(
              "overflow-hidden rounded-md bg-[#011627]",
              !expanded && "max-h-[350px]"
            )}
          >
            <Tabs defaultValue="preview">
              <div className="flex items-center justify-between px-5 pt-3">
                <TabsList className="grid w-full bg-[#011627] sm:inline-flex">
                  <TabsTrigger
                    value="preview"
                    className="px-2.5 py-1.5 text-xs hover:bg-slate-700/50 data-[state=active]:bg-slate-700 data-[state=active]:text-slate-200"
                  >
                    {id}.preview.tsx
                  </TabsTrigger>
                  <TabsTrigger
                    value="code"
                    className="px-2.5 py-1.5 text-xs hover:bg-slate-700/50 data-[state=active]:bg-slate-700 data-[state=active]:text-slate-200"
                  >
                    {id}.tsx
                  </TabsTrigger>
                </TabsList>
                <CopyButton code={code} />
              </div>
              <TabsContent value="preview">
                <div
                  ref={(node) => {
                    node?.textContent && setCode(node.textContent);
                  }}
                  dangerouslySetInnerHTML={{ __html: preview }}
                />
              </TabsContent>
              <TabsContent value="code">
                <div
                  ref={(node) => {
                    node?.textContent && setCode(node.textContent);
                  }}
                  dangerouslySetInnerHTML={{ __html: source }}
                />
              </TabsContent>
            </Tabs>
          </div>
          {!expanded ? (
            <div className="pointer-events-none absolute inset-0 flex h-full w-full items-end justify-center rounded-md bg-gradient-to-t from-slate-900 pb-8">
              <Button
                onClick={() => setExpanded(!expanded)}
                variant="secondary"
                className="pointer-events-auto h-fit"
              >
                Expand
              </Button>
            </div>
          ) : (
            <div className="pointer-events-none absolute inset-0 flex h-full w-full items-end justify-center rounded-md pb-2">
              <button
                onClick={() => setExpanded(!expanded)}
                className="pointer-events-auto px-2 py-2 text-xs font-medium text-slate-100"
              >
                Collapse
              </button>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

const transformComponentName = (componentName: string): string => {
  const transformedName = componentName
    .replace(/([a-z])([A-Z])/g, "$1 $2") // Insert space between lowercase and uppercase letters
    .replace(/([A-Z])([A-Z][a-z])/g, "$1 $2"); // Insert space between uppercase letters followed by lowercase letter

  return transformedName;
};
