'use client'

import * as React from "react";
import { CodeIcon, EyeIcon } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/Tabs";
import { CopyButton } from "./CopyButton";
import { Resizable } from "re-resizable";
import { Button } from "./ui/Button";
import { cn } from "@utils/cn";

export const Preview = ({ id, component, preview, source }: { id: string; component: React.ReactNode; preview: string; source: string }) => {

  const [code, setCode] = React.useState('');
  const [expanded, setExpanded] = React.useState(false);

  return (
    <div className="space-y-3">
      <Tabs defaultValue="preview" orientation='horizontal'>
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-xl text-neutral-500">{transformComponentName(id)}</h3>
          <TabsList className="rounded-full">
            <TabsTrigger value="preview" className="rounded-full p-2"><EyeIcon className="w-4 h-4" /><span className="hidden md:inline-flex">Preview</span></TabsTrigger>
            <TabsTrigger value="code" className="rounded-full p-2"><CodeIcon className="w-4 h-4" /><span className="hidden md:inline-flex">Code</span></TabsTrigger>
          </TabsList>
        </div>
        <TabsContent className="relative rounded-md" value="preview">
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
              right: "hidden sm:flex items-center bg-black",
            }}
            handleComponent={{
              right: <div className="h-8 w-1.5 rounded-full bg-dark-100" />,
            }}
          >
            <div className="@container min-h-[350px] w-full grid place-items-center bg-neutral-50 p-4 md:p-12 shadow-sm">
              {component}
            </div>
          </Resizable>
        </TabsContent >
        <TabsContent className="relative rounded-md overflow-hidden" value="code">
          <div className={cn("bg-[#011627]", !expanded && "max-h-[350px]")}>
            <Tabs defaultValue="preview">
              <div className="flex justify-between items-center px-5 pt-3">
                <TabsList className="bg-[#011627] grid sm:inline-flex w-full">
                  <TabsTrigger value="preview" className="text-xs hover:bg-slate-700/50 data-[state=active]:bg-slate-700 data-[state=active]:text-slate-200 py-1.5 px-2.5">{id}.preview.tsx</TabsTrigger>
                  <TabsTrigger value="code" className="text-xs hover:bg-slate-700/50 data-[state=active]:bg-slate-700 data-[state=active]:text-slate-200 py-1.5 px-2.5">{id}.tsx</TabsTrigger>
                </TabsList>
                <CopyButton code={code} />
              </div>
              <TabsContent value="preview">
                <div
                  tabIndex={-1}
                  ref={(node) => {
                    node?.textContent && setCode(node.textContent)
                  }}
                  dangerouslySetInnerHTML={{ __html: preview }}
                />
              </TabsContent>
              <TabsContent value="code">
                <div
                  tabIndex={-1}
                  ref={(node) => {
                    node?.textContent && setCode(node.textContent)
                  }}
                  dangerouslySetInnerHTML={{ __html: source }}
                />
              </TabsContent>
            </Tabs>
          </div>
          <footer 
          className={cn("absolute pointer-events-none rounded-md h-full w-full inset-0 bg-gradient-to-t from-slate-900 flex justify-center items-end pb-8",
          expanded ? "pb-2 bg-none" : "pb-8")}>
            <button onClick={() => setExpanded(!expanded)} 
                  className={cn([
                    expanded ? "text-xs px-2 py-1" : "text-sm px-3 py-1.5 bg-neutral-200 text-neutral-800",
                    "pointer-events-auto rounded-md font-medium transition-all duration-300",
                    /** Hover styles */,
                    expanded ? "hover:bg-slate-800 hover:text-white" : "hover:bg-neutral-400",
                    /** Focus styles */
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dark-400 focus-visible:ring-offset-2 ring-offset-dark-800",
                    /** Disabled styles */
                    "disabled:pointer-events-none disabled:opacity-50"
                ])} 
            >{!expanded ? "Expand": "Collapse"}</button>
          </footer>
        </TabsContent >
      </Tabs >
    </div >
  )
}

const transformComponentName = (componentName: string): string => {
  const transformedName = componentName
    .replace(/([a-z])([A-Z])/g, "$1 $2") // Insert space between lowercase and uppercase letters
    .replace(/([A-Z])([A-Z][a-z])/g, "$1 $2"); // Insert space between uppercase letters followed by lowercase letter

  return transformedName;
}