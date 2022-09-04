import { FC } from "react";
import {
  Nextdotjs,
  ReactJs,
  Redux,
  Sass,
  Nodedotjs,
  Mongodb,
  Typescript,
  Express,
  Github,
} from "@icons-pack/react-simple-icons";
import styles from "./techs.module.scss";

const ICON_SIZE = 45;

export const Technologies: FC = () => {
  return (
    <>
      <h2 className={styles.h2}>I build sites with</h2>
      <div className={styles.container}>
        <Nextdotjs size={ICON_SIZE} />
        <ReactJs size={ICON_SIZE} color='#61DAFB' />
        <Redux size={ICON_SIZE} color='#764ABC' />
        <Typescript size={ICON_SIZE} color='#3178C6' />
        <Sass size={ICON_SIZE} color='#CC6699' />
        <Nodedotjs size={ICON_SIZE} color='#339933' />
        <Express size={ICON_SIZE} color='#000000' />
        <Mongodb size={ICON_SIZE} color='#47A248' />
        <Github size={ICON_SIZE} color='#4078C0' />
      </div>
    </>
  );
};
