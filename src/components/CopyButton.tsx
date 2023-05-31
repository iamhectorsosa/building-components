'use client'

import { useClipboard } from "@hooks/useClipboard";
import { Clipboard, CheckIcon, XIcon } from "lucide-react";
import { Button } from "./ui/Button";

export const CopyButton = ({ code }: { code: string }) => {
  const clipboard = useClipboard();
  return (
    <Button
      variant="ghost"
      onClick={() => clipboard.copy(code)}
      className="rounded-full h-fit p-2 text-sm text-slate-300 hover:bg-slate-700/50"
    >
      {clipboard.state === "READY" && <Clipboard className="w-4 h-4" />}
      {clipboard.state === "SUCCESS" && (
        <CheckIcon className="text-green-500 w-4 h-4" />
      )}
      {clipboard.state === "ERROR" && <XIcon className="text-red-500 w-4 h-4" />}
    </Button>
  );
};
