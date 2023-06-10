import { theme } from "@themes";
import { Badge } from "@ui/components";

export default function Preview() {
  return (
    <section className={theme}>
      <div className="flex flex-col gap-3 @sm:flex-row">
        <Badge variant="neutral" rounded="md">
          Hello Neutral
        </Badge>
        <Badge variant="primary" rounded="md">
          Hello Primary
        </Badge>
        <Badge variant="secondary" rounded="md">
          Hello Secondary
        </Badge>
        <Badge variant="accent" rounded="md">
          Hello Accent
        </Badge>
      </div>
    </section>
  );
}
