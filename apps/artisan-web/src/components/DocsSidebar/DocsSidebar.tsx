import { Button } from "@repo/ui/button/Button";
import { cn } from "@repo/utils";
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

type TSidebarCommonProps = { children: React.ReactNode; className?: string };
type TSidebarItem = Omit<TSidebarCommonProps, "children"> & {
  href: string;
  name: string;
};
type TSidebarContext = {};

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

export const SidebarItem = ({ href, name, className }: TSidebarItem) => {
  const { pathname } = useLocation();
  const isActive = href === pathname;
  return (
    <Link
      to={href}
      relative="path"
      className="focus-visible:border-0 focus-visible:outline-none"
    >
      <Button
        className={cn(
          `w-full justify-start bg-transparent data-[active=true]:bg-neutral-300/50 data-[active=true]:font-semibold data-[active=false]:text-neutral-500`,
          className
        )}
        data-active={isActive}
        variant={"secondary"}
        size={"md"}
      >
        {name}
      </Button>
    </Link>
  );
};

export const Sidebar = ({ children, className }: TSidebarCommonProps) => {
  const isMobile = useMediaQuery({ maxWidth: "1080px" });
  if (isMobile) {
    return (
      <>
        <Button
          className={cn(
            `p-1.5 fixed top-4 inset-x-4 bg-neutral-800 w-fit h-fit`
          )}
        >
          <ArrowRightFromLine size={18} className="shrink-0" />
          <span>SHEET MOBILE VIEW COMING SOON </span>
        </Button>
      </>
    );
  }
  return (
    <aside
      className={cn(
        `flex flex-col border-r border-neutral-300 max-w-[350px] h-full w-full overflow-auto py-6  bg-neutral-100`,
        className
      )}
    >
      {children}
    </aside>
  );
};

export const SidebarContent = ({
  children,
  className,
}: TSidebarCommonProps) => {
  return (
    <div className={cn(`w-full flex flex-col gap-y-2 p-2 h-full`, className)}>
      {children}
    </div>
  );
};

export const SidebarGroup = ({ children, className }: TSidebarCommonProps) => {
  return (
    <section className={cn(`flex flex-col pb-4 gap-y-1.5`, className)}>
      {children}
    </section>
  );
};
