import { FC } from "react";
import styles from "./steps.module.scss";
import { StepCardCoding, StepCardContainer, StepCardDrawIdeas } from ".";

export const Steps: FC = () => {
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
      </div>
    </>
  );
};
