import { FC } from "react";
import styles from "./techs.module.scss";
import { ICONS } from "../../utils";
import { useToggleTheme } from "../../hooks";

const ICON_SIZE = 45;

export const Technologies: FC = () => {
  const { theme } = useToggleTheme();

  return (
    <>
      <h2 className={styles.h2}>I build sites with</h2>
      <div className={styles.container}>
        {Object.keys(ICONS).map((key: string, index) => {
          const Icon = ICONS[key]?.icon;
          const color = theme === "dark" ? ICONS[key]?.dark : ICONS[key]?.color;
          return <Icon key={index} size={ICON_SIZE} color={color} />;
        })}
      </div>
    </>
  );
};
