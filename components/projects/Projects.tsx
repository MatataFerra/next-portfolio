import { FC } from "react";
import { ProjectCard } from ".";
import styles from "./projects.module.scss";

export const Projects: FC = () => {
  return (
    <>
      <div className={styles.main}>
        <h2 className={styles.h2}>My Projects</h2>

        <section className={styles["projects-container"]}>
          <ProjectCard
            imgSrc='https://media.giphy.com/media/juZhYgkBIrHNe19kn3/giphy.gif'
            href='https://teslo-matata.herokuapp.com/'
            title='Teslo Shop - Ecommerce'
          />
          <ProjectCard
            imgSrc='https://media.giphy.com/media/tbywzWmAHMa8DJJfHV/giphy.gif'
            href='https://www.inchequeable.com.ar/'
            title='Inchequeable - Blog'
          />
          <ProjectCard
            imgSrc='https://media.giphy.com/media/PluZmEedwcclbGFnid/giphy.gif'
            href='https://matiasferraro.netlify.app/'
            title='Windows Clone - Personal Website'
          />
          <ProjectCard
            imgSrc='https://media.giphy.com/media/OR2KxVSmZBPr3OCF35/giphy.gif'
            href='https://jira-ferra.vercel.app/'
            title='Jira Clone - Project Management'
          />
          <ProjectCard
            imgSrc='https://media.giphy.com/media/ETC3yxtJOxioF0QWxO/giphy.gif'
            href='https://tateti-nine.vercel.app/'
            title='Tic Tac Toe - Game'
          />
          <ProjectCard
            imgSrc='https://media.giphy.com/media/wsBGh5NqUja1NcdpiZ/giphy.gif'
            href='https://pokedex-v1-0.vercel.app/'
            title='Pokedex - Styles Practice'
          />
        </section>
      </div>
    </>
  );
};
