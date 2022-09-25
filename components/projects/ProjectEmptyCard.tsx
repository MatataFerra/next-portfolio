import { FC } from "react";
import { AddIcon } from "../icons";
import { useNavigateTo } from "../../utils/navigator";
import styles from "./projects.module.scss";

export const ProjectEmptyCard: FC = () => {
  const navigateTo = useNavigateTo();
  return (
    <div className={styles["card-empty"]} onClick={() => navigateTo("/projects")}>
      <AddIcon />
    </div>
  );
};
