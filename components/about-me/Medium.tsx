import { FC } from "react";
import styles from "./about.module.scss";

export const Medium: FC = () => {
  return (
    <section className={`${styles.medium} ${styles.brief}`}>
      <p className={styles.p}>
        I was born in 1989 in Buenos Aires. I love football and I{"'"}m a fan of Boca Juniors. I
        studied at the University of Palermo. Later I worked as a frontend developer in a company
        called CoreBiz. I{"'"}m currently working as a frontend developer in a company called
        Steplix. Around 2018 I started to learn about React and I{"'"}m still learning. I{"'"}m also
        learning about Next.js and TypeScript.
      </p>
    </section>
  );
};
