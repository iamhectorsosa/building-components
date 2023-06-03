'use client'

import { useClipboard } from "@hooks/useClipboard";
import { cn } from "@utils/cn";
import { Clipboard, CheckIcon, XIcon } from "lucide-react";

export const CopyButton = ({ code }: { code: string }) => {
  const clipboard = useClipboard();
  return (
    <button
      onClick={() => clipboard.copy(code)}
      className={cn([
        "rounded-full p-2.5 font-medium text-neutral-400 transition-all duration-300",
        /** Hover styles */,
        "hover:bg-slate-800 hover:text-white",
        /** Focus styles */
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dark-400 focus-visible:ring-offset-2 ring-offset-dark-800",
        /** Disabled styles */
        "disabled:pointer-events-none disabled:opacity-50"
    ])}
    >
      {clipboard.state === "READY" && <Clipboard className="w-4 h-4" />}
      {clipboard.state === "SUCCESS" && (
        <CheckIcon className="text-green-500 w-4 h-4" />
      )}
      {clipboard.state === "ERROR" && <XIcon className="text-red-500 w-4 h-4" />}
    </button>
  );
};
