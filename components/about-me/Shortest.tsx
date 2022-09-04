import { FC } from "react";
import styles from "./about.module.scss";

export const Shortest: FC = () => {
  return (
    <section className={`${styles.shortest} ${styles.brief}`}>
      <p className={styles.p}>
        I was born in 1989 in Buenos Aires. I love football and I{"'"}m a fan of Boca Juniors
      </p>
    </section>
  );
};
