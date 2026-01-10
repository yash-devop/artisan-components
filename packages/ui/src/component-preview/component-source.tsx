import { highlightCode } from "@repo/lib";
import { CopyButton } from "@repo/primitives/copy-button";
import { useEffect, useRef, useState } from "react";
const ComponentSource = ({ title, code }: { title: string; code: string }) => {
  if (!code) {
    throw new Error("code is required");
  }

  const [highlightedCode, setHighlightedCode] = useState<string>("");

  const codeRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    highlightCode(code).then((hc) => {
      setHighlightedCode(hc);
    });
  }, [code]);

  return (
    <figure className="md:w-200 border border-neutral-400 rounded-md text-sm [&_pre]:outline-none overflow-hidden">
      <figcaption className="border-b border-neutral-400 flex items-center justify-between py-2 px-3">
        {title}
        <CopyButton
          getValue={() => {
            if (!codeRef) return "";
            if (!codeRef.current?.textContent) return "";
            return codeRef.current.textContent;
          }}
        />
      </figcaption>

      <div
        ref={codeRef}
        className="py-3 overflow-auto w-full"
        dangerouslySetInnerHTML={{
          __html: highlightedCode,
        }}
      ></div>
    </figure>
  );
};

export { ComponentSource };
