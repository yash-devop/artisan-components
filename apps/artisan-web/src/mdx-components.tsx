import React from "react";
import type { useMDXComponents } from "@mdx-js/react";
import { cn } from "@repo/utils";

export const mdxComponents: ReturnType<typeof useMDXComponents> = {
  h1: (props) => (
    <h1
      className="text-4xl font-bold tracking-tight pb-[18px] [&:not(:first-child)]:mt-16"
      {...props}
    />
  ),
  h2: (props) => <h2 className="text-neutral-500 leading-4" {...props} />,
  h3: (props) => <h2 className="mt-10 text-xl font-medium" {...props} />,
  p: ({ className, ...props }: React.ComponentProps<"p">) => (
    <p
      className={cn(`leading-relaxed text-neutral-700`, className)}
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className="rounded-lg bg-muted p-4 overflow-x-auto text-sm bg-red-400"
      {...props}
    />
  ),
  span: (props) => <span className="text-neutral-300" {...props} />,
  code: (props) => (
    <code
      className="bg-neutral-200  px-1.5 py-0.5 rounded text-sm"
      {...props}
    />
  ),
  hr: ({ ...props }: React.ComponentProps<"hr">) => (
    <hr className="my-4 md:my-8" {...props} />
  ),
  Introduction: ({
    children,
    className,
    name,
    description,
    ...props
  }: React.ComponentProps<"div"> & {
    name: string;
    description: string;
  }) => (
    <div className={cn(`flex flex-col gap-2`, className)} {...props}>
      {children}
    </div>
  ),
};
