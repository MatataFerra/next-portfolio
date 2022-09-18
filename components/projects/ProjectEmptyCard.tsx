import { useRouter } from "next/router";
import { FC } from "react";
import { AddIcon } from "../icons";
import styles from "./projects.module.scss";
import { navigateTo } from "../../utils/navigator";

export const ProjectEmptyCard: FC = () => {
  const router = useRouter();
  return (
    <div className={styles["card-empty"]} onClick={() => navigateTo("/projects", router)}>
      <AddIcon />
    </div>
  );
};
