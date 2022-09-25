import { FC } from "react";
import { ProjectCard, ProjectEmptyCard } from ".";
import styles from "./projects.module.scss";

export const Projects: FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.main}>
        <h2 className={styles.h2}>My Projects</h2>
        <section className={styles["projects-container"]}>
          <ProjectCard
            imgSrc="https://media.giphy.com/media/juZhYgkBIrHNe19kn3/giphy.gif"
            href="https://teslo-matata.herokuapp.com/"
          />
          <ProjectCard
            imgSrc="https://media.giphy.com/media/tbywzWmAHMa8DJJfHV/giphy.gif"
            href="https://www.inchequeable.com.ar/"
          />
          <ProjectCard
            imgSrc="https://media.giphy.com/media/PluZmEedwcclbGFnid/giphy.gif"
            href="https://matiasferraro.netlify.app/"
          />
          <ProjectEmptyCard />
        </section>
      </div>
    </section>
  );
};
