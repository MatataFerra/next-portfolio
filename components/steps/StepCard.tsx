import { FC } from "react";
import Image from "next/image";
import { Canvas, HamIcon } from ".";
import styles from "./steps.module.scss";

interface Props {
  children: React.ReactNode;
}

export const StepCardContainer: FC<Props> = ({ children }) => {
  return <div className={styles.card}>{children}</div>;
};

export const StepCardDrawIdeas: FC = () => {
  const pngImage = "/assets/images/steps/hand_pixel.png";
  return (
    <>
      <p className={styles.p}>Step 1: Drawing your ideas</p>
      <div className={styles.line}>
        <span className={styles.span}>
          <HamIcon /> User
        </span>
      </div>
      <div className={styles["line-2"]}>
        <span className={styles["span-2"]}>
          <span className={styles.canvas}>
            <Canvas />
            Hero
          </span>
        </span>
      </div>
      <div className={styles.image}>
        <Image src={pngImage} alt='hand' width={50} height={50} />
      </div>
    </>
  );
};
