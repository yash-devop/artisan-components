import { cn } from "@repo/utils";
import React from "react";

type TComponentPreview = {
  children: React.ReactNode;
  className?: string;
};

export const ComponentPreview = ({
  children,
  className,
}: TComponentPreview) => {
  return (
    <div
      className={cn(
        `bg-neutral-100 w-full border rounded-xl border-neutral-300 h-[300px] flex items-center justify-center mt-6`,
        className
      )}
    >
      {children}
    </div>
  );
};
