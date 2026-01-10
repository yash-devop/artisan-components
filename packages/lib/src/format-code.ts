import * as prettier from "prettier/standalone";
import parserBabel from "prettier/parser-babel";
import parserTypescript from "prettier/parser-typescript";

export function formatCode(code: string, language: "js" | "ts" | "tsx" = "ts") {
  // try {
  // } catch {
  //   return code;
  // }
  return prettier.format(code, {
    parser: language === "ts" || language === "tsx" ? "typescript" : "babel",
    plugins: [parserBabel, parserTypescript],
    semi: true,
    singleQuote: true,
    trailingComma: "es5",
  });
}
