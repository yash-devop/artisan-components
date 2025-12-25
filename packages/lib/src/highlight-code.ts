import { codeToHtml } from "shiki";

export const highlightCode = async (code: string): Promise<string> => {
  const html = await codeToHtml(code, {
    lang: "tsx",
    themes: {
      dark: "github-dark",
      light: "github-light",
    },
  });

  return html;
};
