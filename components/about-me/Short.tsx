import { FC } from "react";
import { useText } from "../../hooks";
import styles from "./about.module.scss";
import { BioProps } from "./interfaces";

export const Short: FC<BioProps> = ({ text, limit }) => {
  const textToRender = useText(text, limit);
  return (
    <section className={`${styles.short} ${styles.brief}`}>
      <p className={styles.p}>{textToRender}</p>
    </section>
  );
};
