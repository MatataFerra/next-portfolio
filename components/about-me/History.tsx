import { FC, useState } from "react";
import styles from "./about.module.scss";
import { Shortest, Short, Button, ButtonGroup } from ".";

const INITIAL_BUTTONS_STATE = {
  1: true,
  2: false,
  3: false,
  4: false,
  5: false,
};

export const History: FC = () => {
  const [buttonClicked, setButtonClicked] = useState(INITIAL_BUTTONS_STATE);

  const onClickedButton = (e: any) => {
    setButtonClicked(INITIAL_BUTTONS_STATE);

    setButtonClicked({
      1: false,
      2: false,
      3: false,
      4: false,
      5: false,
      [e.target.value]: true,
    });
  };

  return (
    <div className={styles.history}>
      <h2 className={styles.h2}>Choose the length of my history</h2>

      <div className={styles.buttons}>
        <ButtonGroup numberOfButtons={5} buttonsState={buttonClicked} onClick={onClickedButton} />
      </div>

      <div className={styles.buttonLabel}>
        <span>Short</span>
        <span>Longest</span>
      </div>

      {(buttonClicked[1] && <Shortest />) || (buttonClicked[2] && <Short />)}
    </div>
  );
};
