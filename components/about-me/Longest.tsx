import { FC } from "react";
import styles from "./about.module.scss";
import NextLink from "next/link";
import { useText } from "../../hooks";
import { BioProps } from "./interfaces";

export const Longest: FC<BioProps> = ({ text, limit }) => {
  const textToRender = useText(text, limit);
  return (
    <section className={`${styles.longest} ${styles.brief}`}>
      <p className={styles.p}>
        {textToRender}
        <strong className={styles.strong}>
          <NextLink href='mailto:matias.agf@gmail.com'>
            Contact me at: matias.agf@gmail.com
          </NextLink>
        </strong>
      </p>
    </section>
  );
};
