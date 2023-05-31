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
          <h3 className="font-semibold text-xl">{transformComponentName(id)}</h3>
          <TabsList className="rounded-full">
            <TabsTrigger value="preview" className="rounded-full p-2"><EyeIcon className="w-4 h-4" /></TabsTrigger>
            <TabsTrigger value="code" className="rounded-full p-2"><CodeIcon className="w-4 h-4" /></TabsTrigger>
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
              right: "hidden sm:flex items-center bg-slate-50",
            }}
            handleComponent={{
              right: <div className="h-8 w-1.5 rounded-full bg-slate-400" />,
            }}
          >
            <div className="@container min-h-[250px] w-full grid place-content-center bg-slate-50 shadow-sm">
              {component}
            </div>
          </Resizable>
        </TabsContent >
        <TabsContent className="relative" value="code">
          <div className={cn("overflow-hidden bg-slate-900 rounded-md", !expanded && "max-h-[250px]")}>
            <Tabs defaultValue="preview">
              <div className="flex justify-between items-center px-5 pt-3">
                <TabsList className="bg-slate-900 grid sm:inline-flex w-full">
                  <TabsTrigger value="preview" className="bg-slate-900 text-xs hover:bg-slate-700/50 data-[state=active]:bg-slate-700 data-[state=active]:text-slate-200 py-1.5 px-2.5">{id}.preview.tsx</TabsTrigger>
                  <TabsTrigger value="code" className="bg-slate-900 text-xs hover:bg-slate-700/50 data-[state=active]:bg-slate-700 data-[state=active]:text-slate-200 py-1.5 px-2.5">{id}.tsx</TabsTrigger>
                </TabsList>
                <CopyButton code={code} />
              </div>
              <TabsContent value="preview">
                <div
                  ref={(node) => {
                    node?.textContent && setCode(node.textContent)
                  }}
                  dangerouslySetInnerHTML={{ __html: preview }}
                />
              </TabsContent>
              <TabsContent value="code">
                <div
                  ref={(node) => {
                    node?.textContent && setCode(node.textContent)
                  }}
                  dangerouslySetInnerHTML={{ __html: source }}
                />
              </TabsContent>
            </Tabs>
          </div>
          {
            !expanded &&
            <div className="absolute pointer-events-none rounded-md h-full w-full inset-0 bg-gradient-to-t from-slate-900 text-white flex justify-center items-end pb-8">
              <Button onClick={() => setExpanded(!expanded)} variant="secondary" className="pointer-events-auto h-fit">Expand</Button>
            </div>
          }
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