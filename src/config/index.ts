export const CONTENT_DIR = "src/content/components";

type Categories = {
	id: string;
	name: string;
	description: string;
}[];

export const categories: Categories = [
	{
		id: "basics",
		name: "The Basics",
		description: "Components that could be used everywhere",
	},
];
