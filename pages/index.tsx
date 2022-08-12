import type { NextPage } from "next";
import { HomeLayout } from "../components/layouts";
import { Navbar, SideBar, Title } from "../components";
import styles from "../styles/home.module.scss";

const Home: NextPage = () => {
  return (
    <HomeLayout>
      <section className={styles.section}>
        <Navbar />
        <div className={styles.hero}>
          <SideBar />
          <Title />
          <div>IMAGE</div>
        </div>
      </section>
    </HomeLayout>
  );
};

export default Home;
