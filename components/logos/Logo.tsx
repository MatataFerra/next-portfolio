import { FC } from "react";
import { useToggleTheme } from "../../hooks";
import styles from "./logos.module.scss";
import { LightLogo, DarkLogo } from ".";

export const Logos: FC = () => {
  const { theme } = useToggleTheme();
  return (
    <section className={styles["section-1"]}>
      {theme === "light" ? <LightLogo /> : <DarkLogo />}
    </section>
  );
};
