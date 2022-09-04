import { FC } from "react";
import styles from "./about.module.scss";

export const Short: FC = () => {
  return (
    <section className={`${styles.short} ${styles.brief}`}>
      <p className={styles.p}>
        I was born in 1989 in Buenos Aires. I love football and I{"'"}m a fan of Boca Juniors. I
        studied at the University of Palermo and I{"'"}m. Later I worked as a developer in a company
        called Steplix
      </p>
    </section>
  );
};
