import React, { createContext, useEffect, useState } from "react";
import { cn } from "../../utils/cn";
import { Button } from "./button/Button";

export interface ITabsContent {
  openTab: string;
  setOpen: React.Dispatch<React.SetStateAction<string>>;
}

const TabsContent = createContext<ITabsContent>({
  openTab: "",
  setOpen: () => {},
});

export const Root = ({
  children,
  defaultOpen,
}: {
  children: React.ReactNode;
  defaultOpen?: string;
}) => {
  const [openTab, setOpen] = useState<string>(defaultOpen || "");

  const tabValues = React.Children.toArray(children)
    .filter((child: any) => typeof child?.props?.value === ("string" as string))
    .map((child: any) => child?.props?.value as string);
  useEffect(() => {
    if (tabValues.length === 0) return;

    if (!defaultOpen || !tabValues.includes(defaultOpen)) {
      setOpen(tabValues[0] as string);
    } else {
      setOpen(defaultOpen);
    }
  }, [children, defaultOpen]);
  return (
    <TabsContent.Provider value={{ openTab, setOpen }}>
      <div>{children}</div>
    </TabsContent.Provider>
  );
};

export function Content({
  className,
  children,
  value,
  ref,
}: {
  className?: string;
  children: React.ReactNode;
  value: string;
  ref?: React.RefObject<HTMLDivElement | null>;
}) {
  return (
    <TabsContent.Consumer>
      {({ openTab }) => {
        const accessorKey = value;
        if (accessorKey !== openTab) return <></>;
        return (
          <section
            id="tab-content"
            ref={ref}
            className={cn("w-full rounded-md p-3", className)}
          >
            {children}
          </section>
        );
      }}
    </TabsContent.Consumer>
  );
}

Content.displayName = "TabsContent";

export function TabsList({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-1.5 p-1 rounded-md w-fit",
        className
      )}
    >
      {children}
    </div>
  );
}

Content.displayName = "TabsList";

export const Trigger = ({
  className,
  value,
  children,
}: {
  value: string;
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <TabsContent.Consumer>
      {({ openTab, setOpen }) => {
        const isActive = openTab === value;
        return (
          <Button
            type="button"
            variant={"secondary"}
            onClick={() => setOpen(value)}
            data-active={isActive}
            className={cn(
              "rounded-sm px-3 py-1 cursor-pointer select-none w-full flex items-center justify-center",
              className
            )}
          >
            {!children ? <span>{value}</span> : children}
          </Button>
        );
      }}
    </TabsContent.Consumer>
  );
};

Trigger.displayName = "TabsTrigger";
