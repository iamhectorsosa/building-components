"use client";

import * as React from "react";
import { CodeIcon, EyeIcon } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/Tabs";
import { CopyButton } from "./CopyButton";
import { Resizable } from "re-resizable";
import { cn } from "@utils/cn";

import { themes } from "@themes";
import { useTheme } from "./context/ThemeProvider";

export const Preview = ({
  id,
  component,
  preview,
}: {
  id: string;
  component: React.ReactNode;
  preview: string;
}) => {
  const [code, setCode] = React.useState("");
  const [expanded, setExpanded] = React.useState(false);
  const [theme, setTheme] = useTheme();

  return (
    <div className="space-y-3">
      <Tabs defaultValue="preview" orientation="horizontal">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-xl font-semibold">
            {transformComponentName(id)}
          </h3>
          <TabsList className="rounded-full">
            <TabsTrigger value="preview" className="rounded-full p-2">
              <EyeIcon className="h-4 w-4" />
            </TabsTrigger>
            <TabsTrigger value="code" className="rounded-full p-2">
              <CodeIcon className="h-4 w-4" />
            </TabsTrigger>
          </TabsList>
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
              right: "hidden sm:flex items-center bg-transparent rounded-r-md",
            }}
            handleComponent={{
              right: <div className="h-8 w-1.5 rounded-full bg-slate-400" />,
            }}
          >
            <div
              className={cn(
                "grid min-h-[250px] w-full place-items-center p-4 shadow-sm @container md:p-12",
                theme
              )}
              style={{
                backgroundColor: "#fff",
                backgroundImage:
                  "linear-gradient( 45deg, #f1f5f9 25%, transparent 25% ),linear-gradient( 135deg, #f1f5f9 25%, transparent 25% ),linear-gradient( 45deg, transparent 75%, #f1f5f9 75% ),linear-gradient( 135deg, transparent 75%, #f1f5f9 75% )",
                backgroundSize: "20px 20px",
                backgroundPosition: "0px 0px, 10px 0px, 10px -10px, 0px 10px",
              }}
            >
              {component}
            </div>
          </Resizable>
        </TabsContent>
        <TabsContent className="relative" value="code">
          <div
            className={cn(
              "overflow-hidden rounded-md bg-[#011627]",
              !expanded && "max-h-[250px]"
            )}
          >
            <Tabs defaultValue="preview">
              <div className="flex items-center justify-between px-5 pt-3">
                <TabsList className="grid w-full bg-[#011627] sm:inline-flex">
                  <TabsTrigger
                    value="preview"
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
            </Tabs>
          </div>
          <footer
            className={cn(
              "pointer-events-none absolute inset-0 flex h-full w-full items-end justify-center rounded-md bg-gradient-to-t from-slate-900",
              expanded ? "border bg-none pb-0" : "pb-8"
            )}
          >
            <button
              onClick={() => setExpanded(!expanded)}
              className={cn([
                expanded
                  ? "px-2 py-1 text-xs"
                  : "bg-neutral-200 px-3 py-1.5 text-sm text-neutral-800",
                "pointer-events-auto rounded-md font-medium transition-all duration-300",
                /** Hover styles */
                expanded
                  ? "text-white hover:bg-slate-800"
                  : "hover:bg-neutral-400",
                /** Focus styles */
                "focus-visible:ring-dark-400 ring-offset-dark-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
              ])}
            >
              {!expanded ? "Expand" : "Collapse"}
            </button>
          </footer>
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
