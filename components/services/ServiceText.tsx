import { FC, forwardRef } from "react";
import styles from "./services.module.scss";

interface Props {
  children: React.ReactNode;
  cssClass?: string;
}

// eslint-disable-next-line react/display-name
export const ServiceForwardRef = forwardRef<HTMLDivElement, Props>(
  ({ children, cssClass }, ref) => {
    return (
      <div ref={ref} className={`${styles.text} ${cssClass}`}>
        {children}
      </div>
    );
  }
);
