import { FC } from "react";
import styles from "./about.module.scss";
import { DrinkIcon, DiplomaIcon, TravelIcon, ChildrenIcon } from ".";

const ICON_PROPS = {
  width: 24,
  height: 24,
  fill: "#333",
};

export const Icons: FC = () => {
  return (
    <>
      <div className={styles["about-item"]}>
        <DrinkIcon width={ICON_PROPS.width} height={ICON_PROPS.height} fill={ICON_PROPS.fill} />
        <p>Gin Tonic Lover</p>
      </div>
      <div className={styles["about-item"]}>
        <TravelIcon width={ICON_PROPS.width} height={ICON_PROPS.height} fill={ICON_PROPS.fill} />
        <p>I love travel </p>
      </div>
      <div className={styles["about-item"]}>
        <ChildrenIcon width={ICON_PROPS.width} height={ICON_PROPS.height} fill={ICON_PROPS.fill} />
        <p>I have 3 nephews and 4 nieces</p>
      </div>
      <div className={styles["about-item"]}>
        <DiplomaIcon width={ICON_PROPS.width} height={ICON_PROPS.height} fill={ICON_PROPS.fill} />
        <p>I have a degree in Human Resources, but I love programming </p>
      </div>
    </>
  );
};
