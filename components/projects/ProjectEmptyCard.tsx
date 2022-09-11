import { FC } from "react";
import { AddIcon } from "../icons";
import styles from "./projects.module.scss";

export const ProjectEmptyCard: FC = () => {
  return (
    <div className={styles["card-empty"]}>
      <AddIcon />
    </div>
  );
};
