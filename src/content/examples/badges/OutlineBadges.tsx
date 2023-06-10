import { theme } from "@themes";
import { Badge } from "@ui/components";

export default function Preview() {
  return (
    <section className={theme}>
      <div className="flex flex-col gap-3 @sm:flex-row">
        <Badge outline variant="neutral" rounded="md">
          Hello Neutral
        </Badge>
        <Badge outline variant="primary" rounded="md">
          Hello Primary
        </Badge>
        <Badge outline variant="secondary" rounded="md">
          Hello Secondary
        </Badge>
        <Badge outline variant="accent" rounded="md">
          Hello Accent
        </Badge>
      </div>
    </section>
  );
}
