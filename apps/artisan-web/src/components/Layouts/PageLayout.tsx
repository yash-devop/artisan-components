import React from "react";
import { Outlet } from "react-router";
import { DocsSidebar } from "../DocsSidebar/DocsSidebar";

export const PageLayout = () => {
  return (
    <div className="w-full h-screen px-1.5 pt-1.5 pb-1.5 lg:pb-14 bg-background">
      {/* <div className="h-14 bg-red-400 w-full">header</div> */}
      <div className="w-full h-full border border-neutral-400/80 bg-neutral-50 overflow-hidden rounded-lg flex">
        <DocsSidebar />
        <div className="h-full w-full overflow-auto py-10 px-6 md:px-16">
          <Outlet />
        </div>
      </div>
      <footer className="py-4 flex items-center justify-center">Footer</footer>
    </div>
  );
};
