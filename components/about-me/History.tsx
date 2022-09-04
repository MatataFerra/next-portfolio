import { FC, useState } from "react";
import styles from "./about.module.scss";
import {
  Shortest,
  Short,
  Medium,
  Long,
  Longest,
  ButtonGroup,
  HistoriesProps,
  StateButtonClickProps,
} from ".";

const INITIAL_BUTTONS_STATE = {
  1: true,
  2: false,
  3: false,
  4: false,
  5: false,
};

const HISTORIES: HistoriesProps = {
  1: {
    title: "Shortest",
    content: <Shortest />,
  },

  2: {
    title: "Short",
    content: <Short />,
  },
  3: {
    title: "Medium",
    content: <Medium />,
  },

  4: {
    title: "Long",
    content: <Long />,
  },

  5: {
    title: "Longest",
    content: <Longest />,
  },
};

export const History: FC = () => {
  const [buttonClicked, setButtonClicked] = useState<StateButtonClickProps>(INITIAL_BUTTONS_STATE);

  const onClickedButton = (e: any) => {
    setButtonClicked(INITIAL_BUTTONS_STATE);

    setButtonClicked((prev) => {
      Object.keys(prev).forEach((key) => {
        prev[key] = false;
      });

      return {
        ...prev,
        [e.target.value]: true,
      };
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

      {Object.keys(buttonClicked).map((key) => {
        if (buttonClicked[key]) {
          return <>{HISTORIES[key].content}</>;
        }
      })}
    </div>
  );
};
