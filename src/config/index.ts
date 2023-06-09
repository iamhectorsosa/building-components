export const CONTENT_DIR = "src/content/components";

type Categories = {
  id: string;
  name: string;
  description: string;
}[];

export const categories: Categories = [
  {
    id: "default",
    name: "Default Theme",
    description: "Looking good, minimal effort",
  },
  {
    id: "dark",
    name: "Dark Theme",
    description: "Looking good, but for the night owls",
  },
];
