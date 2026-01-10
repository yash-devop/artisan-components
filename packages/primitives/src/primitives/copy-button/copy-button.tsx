import { useCopyClipboard } from "@repo/hooks";
import { Button } from "../button";
import { Check, Copy } from "lucide-react";

export const CopyButton = ({
  value,
  getValue,
}: {
  value?: string;
  getValue?: () => string;
}) => {
  const { copyToClipboard, isCopied } = useCopyClipboard();

  return (
    <Button
      className="flex items-center justify-center text-neutral-600 cursor-pointer"
      size={"sm"}
      variant={"link"}
      onClick={() => {
        if (!value && !getValue) return;
        const copyString = getValue ? getValue() : value;

        copyToClipboard(copyString);
      }}
    >
      {isCopied ? (
        //@ts-ignore
        <Check size={17} />
      ) : (
        //@ts-ignore
        <Copy size={17} />
      )}
    </Button>
  );
};
