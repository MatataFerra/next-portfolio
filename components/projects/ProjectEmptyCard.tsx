import { useRouter } from "next/router";
import { FC } from "react";
import { AddIcon } from "../icons";
import styles from "./projects.module.scss";
import { navigateTo, useNavigateTo } from "../../utils/navigator";

export const ProjectEmptyCard: FC = () => {
  const navigateTo = useNavigateTo();
  return (
    <div className={styles["card-empty"]} onClick={() => navigateTo("/projects")}>
      <AddIcon />
    </div>
  );
};
