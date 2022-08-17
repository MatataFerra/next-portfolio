import { FC, useRef } from "react";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline, ScrollTrigger } from "react-gsap";
import Image from "next/image";
import { ServiceText } from ".";
import styles from "./services.module.scss";

export const Services: FC = () => {
  const divRef = useRef<any>(null);
  return (
    <div className={`${styles.tween} services-animate`}>
      {/* <div className={styles.section} /> */}
      <div id='trigger'></div>
      <Controller>
        <ScrollTrigger pin markers>
          <Scene duration={400} triggerElement={"#trigger"}>
            {(progress: number) => (
              <Timeline totalProgress={progress} paused stagger={1}>
                <Tween from={{ opacity: 0, x: -200 }} to={{ opacity: 1, x: 550 }}>
                  <div className={`${styles.screen}`} ref={divRef}>
                    <Image
                      src='/assets/images/screen.svg'
                      alt='illustration'
                      width={500}
                      height={500}
                    />
                  </div>
                </Tween>
                <Tween from={{ opacity: 0, x: -200 }} to={{ opacity: 1, x: 0 }}>
                  <div ref={divRef} className={`${styles.text}`}>
                    <ServiceText>
                      <h2>Scratch from ideas</h2>
                      <p>
                        First we start with a brainstorming session to get a clear understanding of
                        your business and your goals.
                      </p>
                    </ServiceText>
                  </div>
                </Tween>
                <Tween from={{ opacity: 0, x: 700 }} to={{ opacity: 1, x: 350 }}>
                  <div ref={divRef} className={`${styles.search}`}>
                    <Image
                      src='/assets/images/searchbar.svg'
                      alt='illustration'
                      width={150}
                      height={150}
                    />
                  </div>
                </Tween>
                <Tween from={{ opacity: 0, x: -200 }} to={{ opacity: 1, x: 550 }}>
                  <div ref={divRef} className={`${styles.banner}`}>
                    <Image
                      src='/assets/images/banner.svg'
                      alt='illustration'
                      width={400}
                      height={100}
                    />
                  </div>
                </Tween>
                <Tween from={{ opacity: 0, x: -200 }} to={{ opacity: 1, x: 0 }}>
                  <div ref={divRef} className={`${styles["text-2"]}`}>
                    <ServiceText>
                      <h2>Web Development</h2>
                      <p>
                        I build your website from scratch using the latest technologies and best
                        practices.
                      </p>
                    </ServiceText>
                  </div>
                </Tween>
                <Tween from={{ opacity: 0, x: -200 }} to={{ opacity: 1, x: 550 }}>
                  <div ref={divRef} className={`${styles.block}`}>
                    <Image
                      src='/assets/images/block.svg'
                      alt='illustration'
                      width={100}
                      height={100}
                    />
                  </div>
                </Tween>
                <Tween from={{ opacity: 0, x: -200 }} to={{ opacity: 1, x: 550 }}>
                  <div ref={divRef} className={`${styles["line-1"]}`}>
                    <Image
                      src='/assets/images/line-1.svg'
                      alt='illustration'
                      width={100}
                      height={15}
                    />
                  </div>
                </Tween>

                <Tween from={{ opacity: 0, x: -200 }} to={{ opacity: 1, x: 550 }}>
                  <div ref={divRef} className={`${styles["line-2"]}`}>
                    <Image
                      src='/assets/images/line-2.svg'
                      alt='illustration'
                      width={100}
                      height={15}
                    />
                  </div>
                </Tween>
                <Tween from={{ opacity: 0, x: -200 }} to={{ opacity: 1, x: 550 }}>
                  <div ref={divRef} className={`${styles["line-3"]}`}>
                    <Image
                      src='/assets/images/line-1.svg'
                      alt='illustration'
                      width={100}
                      height={15}
                    />
                  </div>
                </Tween>
                <Tween from={{ opacity: 0, x: -200 }} to={{ opacity: 1, x: 0 }}>
                  <div ref={divRef} className={`${styles["text-3"]}`}>
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
        </ScrollTrigger>
      </Controller>
      <div className={styles.section} />
    </div>
  );
};
