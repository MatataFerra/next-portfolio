import { FC } from "react";
import { useText } from "../../hooks";
import styles from "./about.module.scss";
import { BioProps } from "./interfaces";
import NextLink from "next/link";

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
