import { FC, useRef } from "react";
import { Timeline, Tween } from "react-gsap";
import { Controller, Scene } from "react-scrollmagic";
import styles from "./services.module.scss";
import { ServiceText } from ".";

export const TweenText: FC = () => {
  const servicesRef = useRef<HTMLDivElement>(null);
  const divRef = useRef<HTMLDivElement>(null);
  return (
    <div ref={servicesRef} className={`${styles["text-container"]} services-animate`}>
      <Controller>
        <Scene duration={400} triggerElement={"#trigger"}>
          {(progress: number) => (
            <Timeline totalProgress={progress} paused stagger={1}>
              <Tween from={{ opacity: 0, x: -200 }} to={{ opacity: 1, x: 0 }}>
                <div ref={divRef} className={`${styles.text} ${styles["text-1"]}`}>
                  <ServiceText>
                    <h2>Scratch from ideas</h2>
                    <p>
                      First we start with a brainstorming session to get a clear understanding of
                      your business and your goals.
                    </p>
                  </ServiceText>
                </div>
              </Tween>

              <Tween from={{ opacity: 0, x: -200 }} to={{ opacity: 1, x: 0 }}>
                <div ref={divRef} className={`${styles.text} ${styles["text-2"]} `}>
                  <ServiceText>
                    <h2>Web Development</h2>
                    <p>
                      I build your website from scratch using the latest technologies and best
                      practices.
                    </p>
                  </ServiceText>
                </div>
              </Tween>

              <Tween from={{ opacity: 0, x: -200 }} to={{ opacity: 1, x: 0 }}>
                <div ref={divRef} className={`${styles.text} ${styles["text-3"]}`}>
                  <ServiceText>
                    <h2>Your application will be robust</h2>
                    <p>
                      You can use your website to sell your products, services, or even your
                      knowledge.
                    </p>
                  </ServiceText>
                </div>
              </Tween>
            </Timeline>
          )}
        </Scene>
      </Controller>
    </div>
  );
};
