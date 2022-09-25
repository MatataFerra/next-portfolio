import { NextPage } from "next";
import { HomeLayout, ResponsiveNavbar, Title } from "../../components";
import styles from "./index.module.scss";
import { ArticleCard } from "../../components";
import { ARTICLES } from "../../utils";

const Articles: NextPage = () => {
  return (
    <HomeLayout>
      <ResponsiveNavbar />
      <Title title="Articles" className={styles.header}>
        <small className={styles.small}>Only Spanish</small>
      </Title>
      <section>
        {ARTICLES.map((article, index) => {
          return (
            <ArticleCard
              key={index}
              title={article.title}
              description={article.description}
              link={article.link}
              icon={article.icon}
            />
          );
        })}
      </section>
    </HomeLayout>
  );
};

export default Articles;
