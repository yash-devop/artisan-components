import { useState } from "react";

export const useCopyClipboard = (
  onCopy?: () => void,
  timeout: number = 2000
) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = async (value: string = "") => {
    await navigator.clipboard
      .writeText(value)
      .then(() => {
        setIsCopied(true);
        onCopy?.();
        setTimeout(() => {
          setIsCopied(false);
        }, timeout);
      })
      .catch((err) => console.error(err));
  };

  return { copyToClipboard, isCopied };
};
