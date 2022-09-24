import type { NextPage } from "next";
import { useDevice } from "../hooks";
import {
  About,
  Footer,
  HeroImage,
  HomeLayout,
  Projects,
  ResponsiveNavbar,
  Services,
  SideBar,
  Steps,
  HeroTitle,
} from "../components";
import styles from "../styles/home.module.scss";
import trigger from "../components/services/services.module.scss";
import { Technologies } from "../components/technologies/Technologies";

const Home: NextPage = () => {
  const device = useDevice();
  const imageSize = [350, 500];

  return (
    <HomeLayout>
      <ResponsiveNavbar />
      <div className={styles.hero}>
        {device === "desktop" && <SideBar />}
        <HeroTitle />
        <HeroImage src="/assets/images/hero.avif" alt="Hero Image" propotion={1} size={imageSize} />
      </div>
      <div className={trigger.trigger} id="trigger"></div>
      <div>
        <Services />
        <Steps />
        <Projects />
        <About />
        <Technologies />
      </div>
      <Footer />
    </HomeLayout>
  );
};

export default Home;
