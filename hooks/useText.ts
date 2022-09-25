import { useMemo } from "react";

export const useText = (text: string, maxLength: number) => {
  const textMemorized = useMemo(() => {
    const textToshow = text
      ?.split(".")
      .map((phrase, index) => {
        if (index <= maxLength) {
          return phrase.trim();
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
