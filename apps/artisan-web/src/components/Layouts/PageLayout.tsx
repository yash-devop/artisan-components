import React from "react";
import { Outlet } from "react-router";
import { DocsSidebar } from "../DocsSidebar/DocsSidebar";

export const PageLayout = () => {
  return (
    <div className="w-full h-screen p-1.5 bg-background">
      <div className="w-full h-full border border-neutral-400/80 bg-neutral-50 overflow-hidden rounded-lg flex ">
        <DocsSidebar />
        <div className=" w-full overflow-auto py-3 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
