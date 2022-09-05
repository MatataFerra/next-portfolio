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
  TEXT_HISTORY,
} from ".";

const INITIAL_BUTTONS_STATE = {
  1: true,
  2: false,
  3: false,
  4: false,
  5: false,
};

export const History: FC = () => {
  const [buttonClicked, setButtonClicked] = useState<StateButtonClickProps>(INITIAL_BUTTONS_STATE);
  const HISTORIES: HistoriesProps = {
    1: {
      title: "Shortest",
      content: <Shortest text={TEXT_HISTORY} limit={1} />,
    },

    2: {
      title: "Short",
      content: <Short text={TEXT_HISTORY} limit={3} />,
    },

    3: {
      title: "Medium",
      content: <Medium text={TEXT_HISTORY} limit={5} />,
    },

    4: {
      title: "Long",
      content: <Long text={TEXT_HISTORY} limit={9} />,
    },

    5: {
      title: "Longest",
      content: <Longest text={TEXT_HISTORY} limit={12} />,
    },
  };

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
          return <div key={HISTORIES[key].title}>{HISTORIES[key].content}</div>;
        }
      })}
    </div>
  );
};
