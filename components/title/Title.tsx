import { FC } from "react";
import styles from "./title.module.scss";

export const Title: FC = () => {
  return (
    <div>
      <h1 className={styles.h1}>
        <span className={styles.letter}>Matías</span>
        <br />
        <span className={`${styles.letter} ${styles["letter-space"]}`}>Ferraro</span>
      </h1>
      <h2 className={styles.h2}>
        Crafting sites from <span className={styles.gradient}> ideas</span>
      </h2>
      <p className={styles.p}>Desarrollador Frontend viviendo en Argentina (Buenos Aires).</p>
    </div>
  );
};
