import { useMemo } from "react";

export const useText = (text: string, maxLength: number) => {
  const textMemorized = useMemo(() => {
    const checkLimit = text.split(".").length > maxLength ? maxLength : text.split(".").length;
    const textToshow = text
      ?.split(".")
      .map((t, i) => {
        if (i <= checkLimit) {
          return t.trim();
        }
        return null;
      })
      .reduce((prev, curr) => {
        if (curr) {
          return `${prev} ${curr}.`;
        }

        return prev;
      }, "");

    return textToshow;
  }, [text, maxLength]);

  return [textMemorized] as const;
};
