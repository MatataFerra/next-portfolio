import { FC } from "react";
import NextLink from "next/link";
import { useText } from "../../hooks";
import { BioProps } from "../../interface";
import styles from "./about.module.scss";

export const Text: FC<BioProps> = ({ text, limit, cssClass, isLast }) => {
  const textToRender = useText(text, limit);
  return (
    <section className={`${cssClass ? styles[cssClass] : ""} ${styles.brief}`}>
      <p className={styles.p}>{textToRender}</p>
      {isLast && (
        <strong className={styles.strong}>
          <NextLink href='mailto:matias.agf@gmail.com'>
            Contact me at: matias.agf@gmail.com
          </NextLink>
        </strong>
      )}
    </section>
  );
};
