import React from "react";
import type { useMDXComponents } from "@mdx-js/react";

export const mdxComponents: ReturnType<typeof useMDXComponents> = {
  h1: (props) => (
    <h1 className="text-4xl font-bold tracking-tight" {...props} />
  ),
  h2: (props) => <h2 className="text-2xl font-semibold" {...props} />,
  p: (props) => <p className="leading-7 text-muted-foreground" {...props} />,
  pre: (props) => (
    <pre
      className="rounded-lg bg-muted p-4 overflow-x-auto text-sm"
      {...props}
    />
  ),
  span: (props) => <span className="text-neutral-300" {...props} />,
  code: (props) => (
    <code className="bg-muted px-1.5 py-0.5 rounded text-sm" {...props} />
  ),
};
