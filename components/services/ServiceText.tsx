import { FC } from "react";
import styles from "./services.module.scss";

interface Props {
  children: React.ReactNode;
  cssClass?: string;
}

export const ServiceText: FC<Props> = ({ children, cssClass }) => {
  return <div className={cssClass}>{children}</div>;
};
