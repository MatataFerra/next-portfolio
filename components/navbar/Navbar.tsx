import { FC } from "react";
import NextLink from "next/link";
import { EmailIcon, ChangeThemeIcon } from ".";
import { Logos } from "../logos";
import styles from "./navbar.module.scss";
import { useToggleTheme } from "../../hooks";
import { useNavigateTo } from "../../utils";

export const Navbar: FC = () => {
  const navigateTo = useNavigateTo();

  return (
    <nav className={styles.navbar}>
      <Logos />
      <section className={styles["section-2"]}>
        <article className={styles.article}>
          <div className={styles.contact}>
            <EmailIcon width={20} />
            <NextLink href='mailto:matias.agf@gmail.com'>
              <a className={styles.email}>
                <span className={styles.text}>matias.agf@gmail.com</span>
              </a>
            </NextLink>
          </div>
          <ChangeThemeIcon />
        </article>

        <ul className={styles.ul}>
          <li onClick={() => navigateTo("/")}>Home</li>
          <li onClick={() => navigateTo("/projects")}>Projects</li>
          <li onClick={() => navigateTo("/articles")}>Articles</li>
        </ul>
      </section>
    </nav>
  );
};
