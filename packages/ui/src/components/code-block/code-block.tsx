import { cn } from "@repo/utils";
import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

import { Check, Copy } from "lucide-react";
import { Tabs } from "@repo/primitives";

import { useCopyClipboard } from "@repo/hooks";
import { highlightCode } from "@repo/lib";

type TRootProps = {
  className?: string;
  children: React.ReactNode;
  defaultOpen?: string;
};

type TCopyContext = {
  ref?: React.RefObject<HTMLDivElement | null>;
  copyToClipboard: <T>(copyText: T) => void;
  isCopied?: boolean;
};

const CopyContext = createContext<TCopyContext | null>(null);

const useCopyContext = () => {
  const context = useContext(CopyContext);
  if (!context) {
    throw new Error(
      "useCopyContext must be wrapped withing CopyContext.Provider"
    );
  }
  return context;
};

const BlockRoot = ({ className, children, defaultOpen }: TRootProps) => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const { copyToClipboard, isCopied } = useCopyClipboard();

  const copyBoard = () => {
    const textToCopy = contentRef.current?.innerText;
    if (!textToCopy) return;
    copyToClipboard(textToCopy);
  };
  return (
    <CopyContext.Provider
      value={{ copyToClipboard: copyBoard, ref: contentRef, isCopied }}
    >
      <div
        className={cn(
          `max-w-[800px] border rounded-lg border-neutral-300`,
          className
        )}
      >
        <Tabs.Root defaultOpen={defaultOpen}>{children}</Tabs.Root>
      </div>
    </CopyContext.Provider>
  );
};

const BlockList = ({ children }: { children: React.ReactNode }) => {
  return (
    <Tabs.TabsList className="w-full p-0 pl-2.5">{children}</Tabs.TabsList>
  );
};

const BlockHeader = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        `border-b border-neutral-300 p-2 flex items-center justify-between gap-1 w-full bg-neutral-100 rounded-t-lg`,
        className
      )}
    >
      {children}
    </div>
  );
};

const BlockTab = ({
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

const BlockContent = ({
  value,
  children,
  className,
}: {
  value: string;
  children: React.ReactNode;
  className?: string;
}) => {
  const { ref } = useCopyContext();
  return (
    <Tabs.TabContent
      ref={ref}
      value={value}
      className={cn(
        `
bg-transparent overflow-x-auto max-w-[800px]
[&::-webkit-scrollbar]:h-1
[&::-webkit-scrollbar-track]:bg-neutral-100
[&::-webkit-scrollbar-thumb]:bg-neutral-400
[&::-webkit-scrollbar-thumb]:rounded-full
hover:[&::-webkit-scrollbar-thumb]:bg-neutral-500
text-sm`,
        className
      )}
    >
      {children}
    </Tabs.TabContent>
  );
};

const BlockIcon = ({ children }: { children: React.ReactNode }) => {
  return children;
};

const BlockCopy = () => {
  const { copyToClipboard, isCopied } = useCopyContext();

  return (
    <button className="flex items-center justify-center text-neutral-600 cursor-pointer pr-2">
      {isCopied ? (
        <Check size={17} />
      ) : (
        <Copy size={17} onClick={copyToClipboard} />
      )}
    </button>
  );
};

// USE-CASE 2:  Code Snippet support.

const BlockCode = () => {
  const [html, setHtml] = useState<string>("");
  const { ref } = useCopyContext();

  useEffect(() => {
    highlightCode(
      `import * as React from 'react';

      /**
       * A custom hook that converts a callback to a ref to avoid triggering re-renders when passed as a
       * prop or avoid re-executing effects when passed as a dependency
       */
      function useCallbackRef<T extends (...args: any[]) => any>(callback: T | undefined): T {
        const callbackRef = React.useRef(callback);
      
        React.useEffect(() => {
          callbackRef.current = callback;
        });
      
        // https://github.com/facebook/react/issues/19240
        return React.useMemo(() => ((...args) => callbackRef.current?.(...args)) as T, []);
      }
      
      export { useCallbackRef };`.trim()
    ).then((val) => {
      setHtml(val);
    });
  }, []);

  return (
    <div className="w-[800px]">
      <div
        tabIndex={-1}
        className="overflow-auto w-full text-sm [&_pre]:outline-none"
        ref={ref}
        dangerouslySetInnerHTML={{
          __html: html,
        }}
      ></div>
    </div>
  );
};

export {
  BlockRoot,
  BlockContent,
  BlockHeader,
  BlockCopy,
  BlockTab,
  BlockIcon,
  BlockCode,
  BlockList,
};
