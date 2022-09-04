import { FC } from "react";
import styles from "./about.module.scss";
import { useText } from "../../hooks";
import { BioProps } from "./interfaces";

export const Medium: FC<BioProps> = ({ text, limit }) => {
  const textToRender = useText(text, limit);
  return (
    <section className={`${styles.medium} ${styles.brief}`}>
      <p className={styles.p}>{textToRender}</p>
    </section>
  );
};
