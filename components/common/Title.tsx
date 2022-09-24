import { FC } from "react";
import styles from "./common.module.scss";

interface Props {
  title: string;
  className?: string;
  children?: React.ReactNode;
}

export const Title: FC<Props> = ({ title, children, className, ...props }) => {
  return (
    <div className={`${styles.h2} ${className ?? ""}`} {...props}>
      <h2>{title}</h2>
      {children}
    </div>
  );
};
