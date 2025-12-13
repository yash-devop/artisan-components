import { Button } from "@repo/ui/button/Button";
import { ArrowRightFromLine } from "lucide-react";
import React, { createContext, useContext } from "react";

import { useMediaQuery } from "react-responsive";
import { Link, useLocation } from "react-router";

type TRoutes = {
  id: number;
  section: string;
  sectionChildren: TSectionChildren[];
};

type TSectionChildren = {
  sectionId: string;
  name: string;
  href: string;
};
export const SIDEBAR_ROUTES: TRoutes[] = [
  {
    id: 1,
    section: "Components",
    sectionChildren: [
      {
        sectionId: "1.1",
        name: "Button",
        href: "/docs/button",
      },
      {
        sectionId: "1.2",
        name: "Accordion",
        href: "/docs/accordion",
      },
      {
        sectionId: "1.3",
        name: "Table",
        href: "/table",
      },
    ],
  },
  {
    id: 2,
    section: "Utilities",
    sectionChildren: [
      {
        sectionId: "2.1",
        name: "Tailwind Merge ( cn )",
        href: "/cn",
      },
      {
        sectionId: "2.2",
        name: "CVA",
        href: "/cva",
      },
      {
        sectionId: "2.2",
        name: "CVA",
        href: "/cva",
      },
    ],
  },
];
export const DocsSidebar = () => {
  return (
    <Sidebar>
      <SidebarContent>
        {SIDEBAR_ROUTES.map((routeUnit) => {
          return (
            <SidebarGroup>
              <h1 className="text-xs font-medium pl-3 pb-1.5 cursor-default select-none">
                {routeUnit.section}
              </h1>
              {routeUnit.sectionChildren.length > 0
                ? routeUnit.sectionChildren?.map((childrenUnit) => {
                    return (
                      <SidebarItem
                        href={childrenUnit.href}
                        name={childrenUnit.name}
                      />
                    );
                  })
                : null}
            </SidebarGroup>
          );
        })}
      </SidebarContent>
    </Sidebar>
  );
};

type TSidebarContext = {};

const SidebarContext = createContext<TSidebarContext | null>(null);

export const SidebarProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <SidebarContext.Provider value={{}}>{children}</SidebarContext.Provider>
  );
};

export const useSidebar = () => {
  const context = useContext(SidebarContext);

  if (!context) {
    throw new Error("useSidebar hook must be wrapped inside SidebarProvider");
  }

  return context;
};

export const SidebarItem = ({ href, name }: { href: string; name: string }) => {
  const { pathname } = useLocation();
  const isActive = href === pathname;
  return (
    <Link to={href} relative="path">
      <Button
        className="w-full justify-start bg-transparent data-[active=true]:bg-neutral-300"
        data-active={isActive}
        variant={"secondary"}
        size={"md"}
      >
        {name}
      </Button>
    </Link>
  );
};

export const Sidebar = ({ children }: { children: React.ReactNode }) => {
  const isMobile = useMediaQuery({ maxWidth: "1080px" });
  if (isMobile) {
    return (
      <>
        <Button className="p-1.5 fixed top-4 inset-x-4 bg-neutral-800 w-fit h-fit">
          <ArrowRightFromLine size={18} className="shrink-0" />
          <span>SHEET MOBILE VIEW COMING SOON </span>
        </Button>
      </>
    );
  }
  return (
    <aside className="flex flex-col border-r border-neutral-300 max-w-[350px] h-full w-full overflow-auto py-6  bg-neutral-100">
      {children}
    </aside>
  );
};

export const SidebarContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full flex flex-col gap-y-2 p-2 h-full">{children}</div>
  );
};

export const SidebarGroup = ({ children }: { children: React.ReactNode }) => {
  return <section className="flex flex-col pb-4">{children}</section>;
};
