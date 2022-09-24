import { FC } from "react";
import styles from "./heroimage.module.scss";
import Image from "next/image";
import { useImageSize } from "../../hooks";

interface Props {
  src: string;
  alt: string;
  size: number[];
  propotion: number;
}

export const HeroImage: FC<Props> = ({ src, alt, size, propotion }) => {
  const [width, height, imagePropotion] = useImageSize(size, propotion);

  return (
    <div className={styles.container}>
      <Image
        src={src}
        priority
        width={width * imagePropotion}
        height={height * imagePropotion}
        alt={alt}
      />
    </div>
  );
};
