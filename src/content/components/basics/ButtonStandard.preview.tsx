import { Button } from "./ButtonStandard";

export default function Preview() {
  return (
    <div className="flex gap-3">
      <Button>Hello Primary</Button>
      <Button variant="secondary">Hello Secondary</Button>
      <Button variant="ghost">Hello Ghost</Button>
    </div>
  );
}
