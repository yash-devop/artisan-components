import React from "react";
import { createBrowserRouter } from "react-router";
import { PageLayout } from "../components/Layouts/PageLayout";
import { TestPage } from "../pages/TestPage";

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
            element: <TestPage />,
          },
          {
            path: "button",
            element: <h1>IM BUTTON</h1>,
          },
        ],
      },
    ],
  },
]);
