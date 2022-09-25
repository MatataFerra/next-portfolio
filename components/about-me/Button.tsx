import { FC } from "react";
import styles from "./about.module.scss";

interface Props {
  value: string | number;
  buttonClicked: boolean;
  // eslint-disable-next-line no-unused-vars
  onClick: (e: any) => void;
}

interface PropsButtonGroup {
  numberOfButtons: number;
  buttonsState: { [key: string | number]: boolean };
  // eslint-disable-next-line no-unused-vars
  onClick: (e: any) => void;
}

export const Button: FC<Props> = ({ value, buttonClicked, onClick }) => {
  return (
    <button
      value={value}
      className={`${buttonClicked ? styles["button-active"] : styles["button-inactive"]}`}
      onClick={onClick}
    />
  );
};

export const ButtonGroup: FC<PropsButtonGroup> = ({
  buttonsState,
  numberOfButtons = 5,
  onClick,
}) => {
  return (
    <div className={styles.buttons}>
      {Array.from({ length: numberOfButtons }, (_, i) => i + 1).map((i: number) => (
        <Button key={i} value={i} buttonClicked={buttonsState[i]} onClick={onClick} />
      ))}
    </div>
  );
};
