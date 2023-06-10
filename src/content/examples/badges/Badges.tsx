import { theme } from "@themes";
import { Badge } from "@ui/components";

export default function Preview() {
  return (
    <section className={theme}>
      <div className="flex flex-col gap-3 @sm:flex-row">
        <Badge variant="neutral">Hello Neutral</Badge>
        <Badge variant="primary">Hello Primary</Badge>
        <Badge variant="secondary">Hello Secondary</Badge>
        <Badge variant="accent">Hello Accent</Badge>
      </div>
    </section>
  );
}
