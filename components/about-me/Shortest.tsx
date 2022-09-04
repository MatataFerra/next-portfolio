import { FC, useMemo } from "react";
import { BioProps } from ".";
import { useText } from "../../hooks";
import styles from "./about.module.scss";

const Shortest: FC<BioProps> = ({ text, limit }) => {
  const textToRender = useText(text, limit);

  return (
    <section className={`${styles.shortest} ${styles.brief}`}>
      <p className={styles.p}>{textToRender}</p>
    </section>
  );
};

export default Shortest;
