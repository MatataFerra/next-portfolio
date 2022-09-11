import { FC, useState } from "react";
import { GitHubIcon, LinkedinIcon } from "../icons";
import styles from "./sidebar.module.scss";
import { IconWithLink } from "../icons/IconWithLink";

export const SideBar: FC = () => {
  const [colorHover, setColorHover] = useState(false);
  const [colorLinkedinHover, setColorLinkedinHover] = useState(false);
  return (
    <div className={styles.container}>
      <IconWithLink href='https://github.com/MatataFerra'>
        <GitHubIcon
          cssClass={styles.svg}
          colorFill={colorHover ? "#272727" : "#303030"}
          setColorHover={setColorHover}
        />
      </IconWithLink>

      <IconWithLink href='https://www.linkedin.com/in/matiasgf/'>
        <LinkedinIcon
          cssClass={styles.svg}
          colorFill={colorLinkedinHover ? "#272727" : "#303030"}
          setColorHover={setColorLinkedinHover}
        />
      </IconWithLink>
    </div>
  );
};
