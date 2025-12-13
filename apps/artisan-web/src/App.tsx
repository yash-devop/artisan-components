import React from "react";
import { RouterProvider } from "react-router";
import { Router } from "./router/RouterBase";
import { SidebarProvider } from "./components/DocsSidebar/DocsSidebar";
function App() {
  return (
    <>
      <SidebarProvider>
        <RouterProvider router={Router}></RouterProvider>
      </SidebarProvider>
    </>
  );
}

export default App;
