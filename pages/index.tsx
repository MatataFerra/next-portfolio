import type { NextPage } from "next";
import { HomeLayout } from "../components/layouts";
import Image from "next/image";
import { Navbar } from "../components/navbar";
import styles from "../styles/home.module.scss";

const Home: NextPage = () => {
  return (
    <HomeLayout>
      <section className={styles.section}>
        <Navbar />
        <div className={styles.div}>Lorem</div>
      </section>
    </HomeLayout>
  );
};

export default Home;
