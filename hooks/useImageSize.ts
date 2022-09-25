import { useEffect, useState } from "react";

export const useImageSize = (size: number[], propotion: number) => {
  const [[width, height], setSize] = useState(size);
  const [imagePropotion, setImagePropotion] = useState(propotion);

  useEffect(() => {
    setSize([width, height]);
    setImagePropotion(propotion);
  }, [height, propotion, width]);

  return [width, height, imagePropotion];
};
