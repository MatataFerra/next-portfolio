import { FC } from "react";
import { Logos } from "../logos";
import styles from "./footer.module.scss";
import { IconWithLink, GitHubIcon, LinkedinIcon } from "../icons";

export const Footer: FC = () => {
  return (
    <section className={styles.container}>
      <div className={styles["bar-container"]}>
        <div className={styles.bar} />
        <div className={styles.bar2} />
      </div>
      <div className={styles["icons-container"]}>
        <Logos />
        <div className={styles["icons-svg"]}>
          <IconWithLink href='https://github.com/MatataFerra'>
            <GitHubIcon cssClass={styles.svg} />
          </IconWithLink>

          <IconWithLink href='https://www.linkedin.com/in/matiasgf/'>
            <LinkedinIcon cssClass={styles.svg} />
          </IconWithLink>
        </div>
      </div>
    </section>
  );
};
