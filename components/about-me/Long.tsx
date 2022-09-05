import { FC } from "react";
import { useText } from "../../hooks";
import styles from "./about.module.scss";
import { BioProps } from "./interfaces";

export const Long: FC<BioProps> = ({ text, limit }) => {
  const textToRender = useText(text, limit);
  return (
    <section className={`${styles.long} ${styles.brief}`}>
      <p className={styles.p}>{textToRender}</p>
    </section>
  );
};
