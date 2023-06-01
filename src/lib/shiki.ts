import shiki, {
	getHighlighter as getHighlighterFromShiki,
	type Highlighter,
	type Lang,
	type Theme,
} from "shiki";

/** ✅ Config */
const theme: Theme = "github-dark";
const bg: React.CSSProperties["backgroundColor"] = "#011627";
const lang: Lang = "tsx";

export async function getHighlighter() {
	/* ✅ Create a highlighter instance with a theme */
	return await getHighlighterFromShiki({ theme });
}

export async function highlight(highlighter: Highlighter, code: string) {
	/* ✅ Highlight your code using the right syntax */
	const tokens = highlighter.codeToThemedTokens(code, lang);
	/* ⚠️ Optional: Custom rendering of code blocks */
	return shiki.renderToHtml(tokens, {
		bg,
		elements: {
			line({ children, className, index }) {
				return `<span data-line=${index + 1}
         class=${className}>${children}</span>`;
			},
		},
		lineOptions: [
			{
				line: 2,
			},
		],
	});
}
