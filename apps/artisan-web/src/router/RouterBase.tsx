import React from "react";
import { createBrowserRouter } from "react-router";
import { PageLayout } from "../components/Layouts/PageLayout";
import ButtonMDX from "../docs/Buttons.mdx";
import PackageInstallerMDX from "../docs/PackageInstaller.mdx";
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
        ],
      },
    ],
  },
]);
