import { FC } from "react";
import styles from "./heroimage.module.scss";
import Image from "next/image";

export const HeroImage: FC = () => {
  return (
    <div className={styles.container}>
      <Image src={"/assets/images/hero-img.webp"} width={500} height={300} alt='Hero Image'></Image>
    </div>
  );
};
