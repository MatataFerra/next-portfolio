import Image from "next/image";
import { FC } from "react";
import styles from "./about.module.scss";
import { History, Icons } from ".";

export const About: FC = () => {
  return (
    <section className={styles.main}>
      <div className={styles["pic-container"]}>
        <div className={styles.pic}>
          <Image
            className={styles.image}
            src='/mock.jpg'
            alt='about-me'
            width={300}
            height={500}
            // layout='fill'
            priority
          />
        </div>
        <div className={styles.about}>
          <h2>About Me</h2>
          <Icons />
        </div>
        <History />
      </div>
    </section>
  );
};
