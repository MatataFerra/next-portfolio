import { NextPage } from "next";
import { useDevice } from "../../hooks";
import { ProjectCardScreen, ResponsiveNavbar, HomeLayout } from "../../components";
import { PROJECTS_IMAGES_DESCRIPTION } from "../../utils";
import styles from "./index.module.scss";

const ProjectsPage: NextPage = () => {
  const device = useDevice();
  return (
    <HomeLayout>
      <ResponsiveNavbar />

      <div className={styles.h2}>
        <h2>Projects</h2>
      </div>
      {PROJECTS_IMAGES_DESCRIPTION.map((image, index) => {
        const alternate = index % 2 === 0;
        return (
          <ProjectCardScreen
            key={index}
            imgSrc={image.src}
            text={image.text}
            cssTextClass={styles["project-text"]}
            cssStrongTextClass={styles.strong}
            linkToProject={image.link}
            alternate={alternate}
          />
        );
      })}
    </HomeLayout>
  );
};

export default ProjectsPage;