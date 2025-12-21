import React from "react";
import { createBrowserRouter } from "react-router";
import { PageLayout } from "../components/Layouts/PageLayout";
import { TestPage } from "../pages/TestPage";
import { PackageShowcase } from "../pages/PackageInstallerShowcase";

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
            element: <TestPage />,
          },
          {
            path: "installer",
            element: <PackageShowcase />,
          },
        ],
      },
    ],
  },
]);
