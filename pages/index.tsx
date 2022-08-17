import type { NextPage } from "next";
import { HomeLayout } from "../components/layouts";
import { useDevice } from "../hooks";
import {
  Navbar,
  SideBar,
  Title,
  HeroImage,
  NavbarMobile,
  Services,
  ServiceScroll,
} from "../components";
import styles from "../styles/home.module.scss";

const Home: NextPage = () => {
  const device = useDevice();

  return (
    <HomeLayout>
      <section className={styles.section}>
        {device === "mobile" ? <NavbarMobile /> : <Navbar />}
        <div className={styles.hero}>
          {device === "desktop" && <SideBar />}
          <Title />
          <HeroImage />
        </div>

        <div>
          <Services />
          {/* <ServiceScroll /> */}
        </div>
      </section>
    </HomeLayout>
  );
};

export default Home;
