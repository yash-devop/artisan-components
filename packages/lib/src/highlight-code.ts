import { codeToHtml } from "shiki";

export const highlightCode = async (code: string): Promise<string> => {
  const LINES = [1, 2, 3];
  const html = await codeToHtml(code, {
    lang: "tsx",
    themes: {
      dark: "github-dark",
      light: "github-light",
    },
    transformers: [
      {
        pre(node) {
          node.properties["class"] = "code-block";
        },
        code(node) {
          node.properties["class"] = "min-w-[100vw]";
        },
        line(node, line) {
          if (LINES.includes(line)) {
            node.properties["data-highlighted-line"] = true;
          }
        },
      },
    ],
  });
  return html;
};
