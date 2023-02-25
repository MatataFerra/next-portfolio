import { FC } from "react";
import styles from "./techs.module.scss";
import { ICONS } from "../../utils";

const ICON_SIZE = 45;

export const Technologies: FC = () => {
  return (
    <>
      <h2 className={styles.h2}>I build sites with</h2>
      <div className={styles.container}>
        {Object.keys(ICONS).map((key: string, index) => {
          const Icon = ICONS[key].icon;
          const color = ICONS[key].color;
          return <Icon key={index} size={ICON_SIZE} color={color} />;
        })}
      </div>
    </>
  );
};
