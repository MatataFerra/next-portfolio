import { FC } from "react";
import styles from "./title.module.scss";
import { LetsTalk } from ".";

export const Title: FC = () => {
  return (
    <div className={styles.div}>
      <h1 className={styles.h1}>
        <span className={styles.letter}>Matías</span>
        <br />
        <span className={`${styles.letter} ${styles["letter-space"]}`}>Ferraro</span>
      </h1>
      <h2 className={styles.h2}>
        Crafting sites from <span className={styles.gradient}> ideas</span>
      </h2>
      <p className={styles.p}>
        Desarrollador Frontend viviendo en Argentina (Buenos Aires). Con experiencia desarrollando
        aplicaciones web complejas con las últimas tecnologías
      </p>
      <LetsTalk />
    </div>
  );
};
