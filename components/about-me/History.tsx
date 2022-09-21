import { FC, useState } from "react";
import styles from "./about.module.scss";
import { Text, ButtonGroup, HistoriesProps, StateButtonClickProps } from ".";
import { INITIAL_BUTTONS_STATE, TEXT_HISTORY } from "../../utils";

export const History: FC = () => {
  const [buttonClicked, setButtonClicked] = useState<StateButtonClickProps>(INITIAL_BUTTONS_STATE);
  const HISTORIES: HistoriesProps = {
    1: {
      title: "Shortest",
      content: <Text text={TEXT_HISTORY} limit={1} />,
    },

    2: {
      title: "Short",
      content: <Text text={TEXT_HISTORY} limit={4} />,
    },

    3: {
      title: "Medium",
      content: <Text text={TEXT_HISTORY} limit={6} />,
    },

    4: {
      title: "Long",
      content: <Text text={TEXT_HISTORY} limit={8} />,
    },

    5: {
      title: "Longest",
      content: <Text text={TEXT_HISTORY} limit={12} isLast />,
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
