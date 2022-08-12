import { FC, useState } from "react";
import NextLink from "next/link";
import { GitHubIcon, LinkedinIcon } from ".";
import styles from "./sidebar.module.scss";

export const SideBar: FC = () => {
  const [colorHover, setColorHover] = useState(false);
  const [colorLinkedinHover, setColorLinkedinHover] = useState(false);
  return (
    <div className={styles.container}>
      <NextLink href='#' target='_blank'>
        <a>
          <GitHubIcon
            cssClass={styles.svg}
            colorFill={colorHover ? "#272727" : "#303030"}
            setColorHover={setColorHover}
          />
        </a>
      </NextLink>
      <NextLink href='#' target='_blank'>
        <a>
          <LinkedinIcon
            cssClass={styles.svg}
            colorFill={colorLinkedinHover ? "#272727" : "#303030"}
            setColorHover={setColorLinkedinHover}
          />
        </a>
      </NextLink>
    </div>
  );
};
