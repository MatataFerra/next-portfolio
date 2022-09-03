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
  Steps,
  Projects,
} from "../components";
import styles from "../styles/home.module.scss";
import trigger from "../components/services/services.module.scss";

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
        <div className={trigger.trigger} id='trigger'></div>
        <div>
          <Services />
          <Steps />
          <Projects />
        </div>
      </section>
    </HomeLayout>
  );
};

export default Home;
