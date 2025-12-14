import { cn } from "@repo/utils";
import { cva, type VariantProps } from "class-variance-authority";
import type React from "react";

type TButtonProps = React.ComponentProps<"button"> & {
  children: React.ReactNode;
  className?: string;
  variant?: VariantProps<typeof buttonVariants>["variant"];
  size?: VariantProps<typeof buttonVariants>["size"];
};
const buttonVariants = cva(
  "flex items-center justify-center gap-2 whitespace-nowrap tracking-md  ring-2 ring-offset-1 ring-primary border-0 border-none transition-all cursor-pointer [box-shadow:0px_1px_4px_rgba(0,0,0,0.24)] focus-visible:shadow-none focus-visible:border-primary outline-0 outline-none",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-neutral-50 rounded-md hover:bg-brand-primary-600  border-brand-primary-700",
        secondary:
          "bg-neutral-200 hover:bg-neutral-300/50 shadow-none [box-shadow:none] rounded-md text-neutral-700 font-medium",
        link: "hover:underline bg-none hover:bg-neutral-25 border-none text-neutral-600 shadow-none [box-shadow:none] !p-0 rounded-md",
      },
      size: {
        sm: "pl-[13px] py-1.5 pr-[13px] text-sm",
        md: "pl-[13px] py-2 pr-[13px] text-sm",
        lg: "pl-[13px] py-2 pr-[13px] text-sm",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "sm",
    },
  }
);

export const Button = ({
  children,
  className,
  variant,
  size,
  ...props
}: TButtonProps) => {
  return (
    <button
      className={cn(buttonVariants({ className, variant, size }))}
      {...props}
    >
      {children}
    </button>
  );
};
