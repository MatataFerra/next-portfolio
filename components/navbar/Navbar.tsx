import Image from "next/image";
import { FC } from "react";
import styles from "./navbar.module.scss";

export const Navbar: FC = () => {
  return (
    <nav className={styles.navbar}>
      <section className={styles["section-1"]}>
        <Image width={80} height={20} src='/assets/images/FERRA.svg' alt='Logo Ferra' />
      </section>

      <section className={styles["section-2"]}>
        <article className={styles.article}>
          <div>Mail</div>
          <div>DarkMode</div>
        </article>

        <ul>
          <li>Home</li>
          <li>Projects</li>
          <li>Blog</li>
        </ul>
      </section>
    </nav>
  );
};
