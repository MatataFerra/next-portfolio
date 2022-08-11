import { FC, useState } from "react";
import NextLink from "next/link";
import Image from "next/image";
import { EmailIcon, DarkModeIcon, LightModeIcon } from ".";
import styles from "./navbar.module.scss";

export const Navbar: FC = () => {
  const [changeTheme, setChangeTheme] = useState(false);

  const onChangeTheme = () => {
    setChangeTheme((prev) => !prev);
  };
  return (
    <nav className={styles.navbar}>
      <section className={styles["section-1"]}>
        <NextLink href='/'>
          <a>
            <Image width={80} height={20} src='/assets/images/FERRA.svg' alt='Logo Ferra' />
          </a>
        </NextLink>
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
