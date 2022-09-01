import { CSSProperties, FC } from "react";
import Image from "next/image";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { Canvas, HamIcon } from ".";
import styles from "./steps.module.scss";

interface Props {
  children: React.ReactNode;
  cssClass?: string;
  title: string;
  styles?: CSSProperties;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export const StepCardContainer: FC<Props> = ({ title, cssClass, children, ...rest }) => {
  return (
    <div
      className={`${styles.card} ${
        !!cssClass && cssClass?.trim().length > 0 ? styles[cssClass] : ""
      }`}
      {...rest}>
      <p className={styles.p}>{title}</p>
      {children}
    </div>
  );
};

export const StepCardDrawIdeas: FC = () => {
  const pngImage = "/assets/images/steps/hand_pixel.png";
  return (
    <>
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

export const StepCardCoding: FC = () => {
  return (
    <>
      <div className={styles["code-line-1"]} />
      <div className={styles["code-container-2"]}>
        <div className={styles["code-line-2"]} />
        <div className={styles["code-line-3"]} />
        <div className={styles["code-line-4"]} />
      </div>
      <div className={styles["code-line-5"]} />
      <div className={styles["code-container-3"]}>
        <div className={styles["code-line-6"]} />
        <div className={styles["code-line-7"]} />
      </div>
      <div className={styles["code-container-4"]}>
        <div className={styles["code-line-8"]} />
      </div>
      <div className={styles["code-container-5"]}>
        <div className={styles["code-line-9"]} />
        <div className={styles["code-line-10"]} />
        <div className={styles["code-line-11"]} />
      </div>
      <div className={styles["code-line-12"]} />
      <div className={styles["code-container-2"]}>
        <div className={styles["code-line-13"]} />
        <div className={styles["code-line-14"]} />
        <div className={styles["code-line-15"]} />
      </div>
      <div className={styles["code-container-4"]}>
        <div className={styles["code-line-16"]} />
      </div>
      <div className={styles["code-container-3"]}>
        <div className={styles["code-line-17"]} />
      </div>
      <div className={styles["code-line-18"]} />
      <div className={styles["code-line-19"]} />
    </>
  );
};

export const StepCardReview: FC = () => {
  return (
    <>
      <TransformWrapper>
        {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
          <TransformComponent>
            <div onMouseEnter={() => zoomIn()} onMouseLeave={() => resetTransform()}>
              <Image
                src={"/assets/images/steps/mockup.jpg"}
                alt='mockup'
                width={250}
                height={350}
              />
            </div>
          </TransformComponent>
        )}
      </TransformWrapper>
    </>
  );
};
