import { NextPage } from "next";
import { HomeLayout, ResponsiveNavbar, Title } from "../../components";
import styles from "./index.module.scss";

const Articles: NextPage = () => {
  return (
    <HomeLayout>
      <ResponsiveNavbar />
      <Title title='Articles' className={styles.header}>
        <small className={styles.small}>Only Spanish</small>
      </Title>
    </HomeLayout>
  );
};

export default Articles;
