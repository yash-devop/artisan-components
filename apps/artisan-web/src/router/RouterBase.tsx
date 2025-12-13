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
        path: "/",
        element: <TestPage />,
      },
    ],
  },
]);
