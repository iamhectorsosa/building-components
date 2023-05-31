import { Button } from "./Button";

export default function Preview() {
  return (
    <div className="flex gap-3 flex-col @md:flex-row">
      <Button>Hello Primary</Button>
      <Button variant="secondary">Hello Secondary</Button>
      <Button variant="ghost">Hello Ghost</Button>
    </div>
  );
}
