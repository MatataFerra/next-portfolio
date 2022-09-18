import Head from "next/head";
import { FC } from "react";
import { Children } from "../../interface";
import styles from "./homelayout.module.scss";

export const HomeLayout: FC<Children> = ({ children }) => {
  return (
    <>
      <Head>
        <title> Matias Ferraro </title>
        <meta name='description' content='Matias Ferraro - Crafting sites from dreams' />
        <meta name='og:title' content='Matias Ferraro - Crafting sites from dreams' />
        <meta name='og:description' content='Crafting sites from dreams' />
        {/* {imageFullUrl && <meta name="og:image" content={imageFullUrl} />} */}
      </Head>

      <main className={styles.main}>
        <section className={styles.section}>{children}</section>
      </main>
    </>
  );
};
