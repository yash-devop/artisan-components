import { cn } from "@repo/utils";
import { SquareTerminal } from "lucide-react";
import React from "react";

import * as Tabs from "./Tabs";

// https://ui.shadcn.com/docs/installation/manual
const Root = ({
  className,
  children,
  defaultOpen,
}: {
  className?: string;
  children: React.ReactNode;
  defaultOpen?: string;
}) => {
  const tabs = [
    {
      name: "pnpm",
      value: "pnpm",
      //   count: 8,
      content:
        "pnpm add class-variance-authority clsx tailwind-merge lucide-react tw-animate-css",
    },
    {
      name: "npm",
      value: "npm",
      //   count: 3,
      content:
        "npm install class-variance-authority clsx tailwind-merge lucide-react tw-animate-css",
    },
    {
      name: "yarn",
      value: "yarn",
      //   count: 6,
      content: `
          yarn add class-variance-authority clsx tailwind-merge lucide-react
         
      `,
    },
  ];
  return (
    <div
      className={cn(
        `max-w-[800px] border rounded-lg border-neutral-300`,
        className
      )}
    >
      <Tabs.Root defaultOpen={defaultOpen}>{children}</Tabs.Root>
    </div>
  );
};

const PackageTabs = ({ children }: { children: React.ReactNode }) => {
  return <Tabs.TabsList className="w-full p-0">{children}</Tabs.TabsList>;
};

const PackageHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="border-b border-neutral-300 p-2 flex items-center gap-1 w-full bg-neutral-100 rounded-t-lg">
      <PackageIcon>{children}</PackageIcon>
    </div>
  );
};

const PackageTab = ({
  value,
  children,
}: {
  value: string;
  children: React.ReactNode;
}) => {
  return (
    <Tabs.Trigger
      value={value}
      className="
      flex items-center gap-1 p-2 leading-3 w-fit bg-neutral-100
      rounded-sm transition border-0 ring-0
      focus-visible:ring-0 focus-visible:outline-none
      data-[active=true]:ring
      data-[active=true]:ring-neutral-300
      hover:bg-neutral-200
    "
    >
      {children}
    </Tabs.Trigger>
  );
};

const PackageContent = ({
  value,
  children,
}: {
  value: string;
  children: React.ReactNode;
}) => {
  return (
    <Tabs.Content
      value={value}
      className="
    bg-transparent overflow-x-auto max-w-[800px]
    [&::-webkit-scrollbar]:h-1
    [&::-webkit-scrollbar-track]:bg-neutral-100
    [&::-webkit-scrollbar-thumb]:bg-neutral-400
    [&::-webkit-scrollbar-thumb]:rounded-full
    hover:[&::-webkit-scrollbar-thumb]:bg-neutral-500
  "
    >
      <p className="text-sm text-neutral-800">{children}</p>
    </Tabs.Content>
  );
};

const PackageIcon = ({ children }: { children: React.ReactNode }) => {
  return children;
};

export {
  Root as PackageInstaller,
  PackageTabs,
  PackageTab,
  PackageHeader,
  PackageContent,
  PackageIcon,
};

// import { cn } from "@repo/utils";
// import { SquareTerminal } from "lucide-react";
// import React from "react";

// import * as Tabs from "./Tabs";

// // https://ui.shadcn.com/docs/installation/manual
// export const PackageInstaller = ({ className }: { className?: string }) => {
//   const tabs = [
//     {
//       name: "pnpm",
//       value: "pnpm",
//       //   count: 8,
//       content:
//         "pnpm add class-variance-authority clsx tailwind-merge lucide-react tw-animate-css",
//     },
//     {
//       name: "npm",
//       value: "npm",
//       //   count: 3,
//       content:
//         "npm install class-variance-authority clsx tailwind-merge lucide-react tw-animate-css",
//     },
//     {
//       name: "yarn",
//       value: "yarn",
//       //   count: 6,
//       content: `
//           yarn add class-variance-authority clsx tailwind-merge lucide-react

//       `,
//     },
//   ];
//   return (
//     <div
//       className={cn(
//         `max-w-[800px] border rounded-lg border-neutral-300`,
//         className
//       )}
//     >
//       <Tabs.Root defaultOpen="yarn">
//         <Tabs.TabsList className="w-full p-0">
//           <PackageHeader>
//             {tabs.map((tab) => (
//               <Tabs.Trigger
//                 key={tab.value}
//                 name={tab.name}
//                 className="
//                flex items-center gap-1 p-2 leading-3 w-fit bg-neutral-100
//                rounded-sm transition

//                focus-visible:ring-0 focus-visible:outline-none

//                data-[state=active]:border
//                data-[state=active]:border-blue-400
//                data-[state=active]:bg-white
//                data-[state=active]:text-blue-600
//              "
//               >
//                 {tab.name}
//               </Tabs.Trigger>
//             ))}
//           </PackageHeader>
//         </Tabs.TabsList>
//         {tabs.map((tab) => (
//           <Tabs.Content
//             key={tab.value}
//             value={tab.value}
//             className="bg-transparent overflow-x-auto max-w-[800px] truncate [&::-webkit-scrollbar]:h-1
//     [&::-webkit-scrollbar-track]:bg-neutral-100
//     [&::-webkit-scrollbar-thumb]:bg-neutral-400
//     [&::-webkit-scrollbar-thumb]:rounded-full
//     hover:[&::-webkit-scrollbar-thumb]:bg-neutral-500 "
//           >
//             <p className="text-sm text-neutral-800">{tab.content}</p>
//           </Tabs.Content>
//         ))}
//       </Tabs.Root>
//     </div>
//   );
// };

// export const PackageHeader = ({ children }: { children: React.ReactNode }) => {
//   return (
//     <div className="border-b border-neutral-300 p-2 flex items-center gap-1 w-full bg-neutral-100 rounded-t-lg">
//       <SquareTerminal
//         size={20}
//         className="stroke-1 text-neutral-600 rounded-none shrink-0 mt-0.5 "
//       />
//       {children}
//     </div>
//   );
// };
