import React from "react";
import { createBrowserRouter } from "react-router";
import { PageLayout } from "../components/Layouts/PageLayout";
import ButtonMDX from "../docs/Buttons.mdx";
import PackageInstallerMDX from "../docs/PackageInstaller.mdx";
import CodeBlockMDX from "../docs/CodeBlock.mdx";
import FocusConceptMDX from "../docs/FocusConcept.mdx";
export const Router = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout />,
    children: [
      {
        path: "docs",
        children: [
          {
            index: true,
            element: (
              <>
                <h1>Welcome to docs</h1>
              </>
            ),
          },
          {
            path: "button",
            element: <ButtonMDX />,
          },
          {
            path: "installer",
            element: <PackageInstallerMDX />,
          },
          {
            path: "codeblock",
            element: <CodeBlockMDX />,
          },
          {
            path: "focus-concept",
            element: <FocusConceptMDX />,
          },
        ],
      },
    ],
  },
]);
