import React from "react";
import { RouterProvider } from "react-router";
import { Router } from "./router/RouterBase";
import { SidebarProvider } from "./components/DocsSidebar/DocsSidebar";
import { MDXProvider } from "@mdx-js/react";
import { mdxComponents } from "./mdx-components";
function App() {
  return (
    <>
      <SidebarProvider>
        <MDXProvider components={mdxComponents}>
          <RouterProvider router={Router}></RouterProvider>
        </MDXProvider>
      </SidebarProvider>
    </>
  );
}

export default App;
