import { Button } from "./Button";
import { CheckCheckIcon, RefreshCcwIcon } from "lucide-react";

export default function Preview() {
  return (
    <div className="flex flex-col items-center gap-4 py-6">
      <div className="flex gap-3 flex-col @md:flex-row">
        <Button>Primary</Button>
        <Button variant="subtle">Subtle</Button>
        <Button variant="link">Link</Button>
        <Button variant="warning">Warning</Button>
        <Button variant="danger">Danger</Button>
      </div>
      <div className="flex gap-3 flex-col @md:flex-row">
        <Button compact>Primary</Button>
        <Button variant="subtle" compact>Subtle</Button>
        <Button variant="link" compact>Link</Button>
        <Button variant="warning" compact>Warning</Button>
        <Button variant="danger" compact>Danger</Button>
      </div>
      <div className="flex items-center gap-3 flex-col @md:flex-row">
        <Button
          iconLeft={<CheckCheckIcon />}
        >
          Submit
        </Button>
        {/* Can overwrite to create your own */}
        <Button
          className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-yellow-500 hover:to-pink-500 active:from-yellow-600 active:to-pink-600"
          iconRight={<RefreshCcwIcon />}
          compact
        >
          Refresh
        </Button>
      </div>
      <div className="flex items-center gap-3 flex-col @md:flex-row">
        <Button isLoading>Submit</Button>
        {/* Can overwrite to create your own */}
        <Button
          className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-yellow-500 hover:to-pink-500 active:from-yellow-600 active:to-pink-600"
          compact
          isLoading
        >
          Refresh
        </Button>
      </div>
    </div>
  );
}
