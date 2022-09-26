import { FC } from "react";
import styles from "./steps.module.scss";
import { StepCardCoding, StepCardContainer, StepCardDrawIdeas, StepCardReview } from ".";

export const Steps: FC = () => {
  return (
    <>
      <h2 className={styles.h2}>
        How do I create <span className={styles.gradient}>ideas</span>
      </h2>
      <small className={styles.small}>hint: mouse over the images</small>
      <div className={styles["card-container"]}>
        <StepCardContainer title="Step 1: Drawing your ideas" cssClass="step-1">
          <StepCardDrawIdeas />
        </StepCardContainer>
        <StepCardContainer title="Step 2: Start coding!" cssClass="coding">
          <StepCardCoding />
        </StepCardContainer>
        <StepCardContainer title="Step 3: Review your app" cssClass="card-review">
          <StepCardReview />
        </StepCardContainer>
      </div>
    </>
  );
};
