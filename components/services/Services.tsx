import { FC, useRef } from "react";
import { TweenText, TweenImages } from ".";
import styles from "./services.module.scss";
import { useDevice } from "../../hooks/useDevice";

export const Services: FC = () => {
  return (
    <section className={styles["section-container"]}>
      <TweenText />
      <TweenImages />

      <div className={styles.section} />
    </section>
  );
};
