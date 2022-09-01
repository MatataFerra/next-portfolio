import { FC, useState } from "react";
import styles from "./steps.module.scss";
import { StepCardCoding, StepCardContainer, StepCardDrawIdeas, StepCardReview } from ".";

export const Steps: FC = () => {
  const [changeCursor, setChangeCursor] = useState(false);

  const onMouseEnter = () => {
    setChangeCursor(true);
  };

  const onMouseLeave = () => {
    setChangeCursor(false);
  };

  return (
    <>
      <h2 className={styles.h2}>
        How do I create <span className={styles.gradient}>ideas</span>{" "}
      </h2>
      <div className={styles["card-container"]}>
        <StepCardContainer title='Step 1: Drawing your ideas'>
          <StepCardDrawIdeas />
        </StepCardContainer>
        <StepCardContainer title='Step 2: Start coding!' cssClass='coding'>
          <StepCardCoding />
        </StepCardContainer>
        <StepCardContainer
          title='Step 3: Review your app'
          onMouseEnter={() => onMouseEnter()}
          onMouseLeave={() => onMouseLeave()}
          cssClass={changeCursor ? "cursor-change" : ""}>
          <StepCardReview />
        </StepCardContainer>
      </div>
    </>
  );
};
