import { FC, useState } from "react";
import NextLink from "next/link";
import { EmailIcon, DarkModeIcon, LightModeIcon } from ".";
import { Logos } from "../logos";
import styles from "./navbar.module.scss";
import { useToggleTheme } from "../../hooks";
import { useRouter } from "next/router";
import { navigateTo } from "../../utils";

export const Navbar: FC = () => {
  const [changeTheme, setChangeTheme] = useState(false);
  const router = useRouter();
  const { toggleTheme } = useToggleTheme();

  const onChangeTheme = () => {
    setChangeTheme((prev) => !prev);
    toggleTheme();
  };

  const onClickOption = (destination: string) => {
    navigateTo(destination, router);
  };

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
          {changeTheme ? (
            <DarkModeIcon onClick={onChangeTheme} />
          ) : (
            <LightModeIcon onClick={onChangeTheme} />
          )}
        </article>

        <ul className={styles.ul}>
          <li onClick={() => navigateTo("/", router)}>Home</li>
          <li onClick={() => navigateTo("/projects", router)}>Projects</li>
          <li onClick={() => navigateTo("/articles", router)}>Articles</li>
        </ul>
      </section>
    </nav>
  );
};
