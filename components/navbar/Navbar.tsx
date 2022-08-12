import { FC, useState } from "react";
import NextLink from "next/link";
import { EmailIcon, DarkModeIcon, LightModeIcon, DarkLogo, LightLogo } from ".";
import styles from "./navbar.module.scss";
import { useToggleTheme } from "../../hooks";

export const Navbar: FC = () => {
  const [changeTheme, setChangeTheme] = useState(false);
  const { theme, toggleTheme } = useToggleTheme();

  const onChangeTheme = () => {
    setChangeTheme((prev) => !prev);
    toggleTheme();
  };
  return (
    <nav className={styles.navbar}>
      <section className={styles["section-1"]}>
        {theme === "light" ? <LightLogo /> : <DarkLogo />}
      </section>

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
          <li>Home</li>
          <li>Projects</li>
          <li>Blog</li>
        </ul>
      </section>
    </nav>
  );
};
