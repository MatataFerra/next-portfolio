import { FC, useState } from "react";
import NextLink from "next/link";
import styles from "./articles.module.scss";
import { ICONS } from "../../utils";

interface Props {
  title: string;
  description: string;
  link: string;
  icon: string;
}

export const ArticleCard: FC<Props> = ({ title, description, link, icon }) => {
  const [colorHover, setColorHover] = useState(false);

  const toggleColor = () => {
    setColorHover((prev) => !prev);
  };
  return (
    <div className={styles.container} onMouseEnter={toggleColor} onMouseLeave={toggleColor}>
      <div>
        {Object.keys(ICONS).map((key: string, index) => {
          if (key === icon) {
            const Icon = ICONS[key].icon;
            const color = ICONS[key].color;
            return <Icon key={index} size={150} color={colorHover ? color : "#2f2f2f"} />;
          }
        })}
      </div>
      <article className={styles.article}>
        <h2 className={styles.h2}> {title} </h2>
        <p className={styles.p}>{description}</p>
        <NextLink href={link} passHref>
          <a target="_blank" rel="noreferrer" className={styles.link}>
            Link to article
          </a>
        </NextLink>
      </article>
    </div>
  );
};
