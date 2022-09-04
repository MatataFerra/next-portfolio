import { FC } from "react";
import styles from "./about.module.scss";

export const Long: FC = () => {
  return (
    <section className={`${styles.long} ${styles.brief}`}>
      <p className={styles.p}>
        I was born in 1989 in Buenos Aires. I love football and I{"'"}m a fan of Boca Juniors. I
        studied at the University of Palermo. Later I worked as a frontend developer in a company
        called CoreBiz. I{"'"}m currently working as a frontend developer in a company called
        Steplix. Around 2018 I started to learn about React and I{"'"}m still learning. I{"'"}m also
        learning about Next.js and TypeScript. In 2022 I{"'"}m started to develop my own projects,
        like <strong>Inchequeable</strong>, a blog site about everything. I also whrite about my
        experiences as a frontend developer, you can find them in my Linkedin profile.
      </p>
    </section>
  );
};
