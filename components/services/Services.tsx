import { FC } from "react";
import { TweenText, TweenImages } from ".";
import styles from "./services.module.scss";

export const Services: FC = () => {
  return (
    <section className={styles["section-container"]}>
      <TweenText />
      <TweenImages />
    </section>
  );
};
