import { Badge } from "./Badge";
import { theme } from "@themes";

export default function Preview() {
  return (
    <section className={theme}>
      <div className="flex flex-col gap-3 @sm:flex-row">
        <Badge>Hello Badge</Badge>
        <Badge variant="warning">Hello Warning</Badge>
        <Badge variant="danger">Hello Danger</Badge>
      </div>
    </section>
  );
}
