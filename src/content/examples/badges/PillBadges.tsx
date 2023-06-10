import { theme } from "@themes";
import { Badge } from "@ui/components";

export default function Preview() {
  return (
    <section className={theme}>
      <div className="flex flex-col gap-3 @sm:flex-row">
        <Badge variant="neutral" rounded="full">
          Hello Neutral
        </Badge>
        <Badge variant="primary" rounded="full">
          Hello Primarty
        </Badge>
        <Badge variant="secondary" rounded="full">
          Hello Secondary
        </Badge>
        <Badge variant="accent" rounded="full">
          Hello Accent
        </Badge>
      </div>
    </section>
  );
}
