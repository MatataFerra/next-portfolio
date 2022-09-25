import { NextPage } from "next";
import { ProjectCardScreen, ResponsiveNavbar, HomeLayout, Title } from "../../components";
import { PROJECTS_IMAGES_DESCRIPTION } from "../../utils";
import styles from "./index.module.scss";

const ProjectsPage: NextPage = () => {
  return (
    <HomeLayout>
      <ResponsiveNavbar />
      <Title title="Projects" />
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
