import { FC } from "react";
import styles from "./footer.module.scss";
import { Logos } from "../logos";

export const Footer: FC = () => {
  return (
    <section className={styles.container}>
      <div className={styles["bar-container"]}>
        <div className={styles.bar} />
        <div className={styles.bar2} />
      </div>
      <Logos />
    </section>
  );
};
