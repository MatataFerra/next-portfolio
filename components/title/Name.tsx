import { FC, useEffect, useRef } from "react";
import styles from "./title.module.scss";
import { gsap } from "gsap";

export const Name: FC = () => {
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const q = gsap.utils.selector(h1Ref);
  const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });

  useEffect(() => {
    if (h1Ref.current) {
      tl.to(q(".letter-animate"), { fontSize: "5rem", duration: 0.3, stagger: 0.1 });
    }
  }, [q, tl]);
  return (
    <h1 className={styles.h1} ref={h1Ref}>
      <span className={`${styles.letter} letter-animate`}>M</span>
      <span className={`${styles.letter} letter-animate`}>a</span>
      <span className={`${styles.letter} letter-animate`}>t</span>
      <span className={`${styles.letter} letter-animate`}>í</span>
      <span className={`${styles.letter} letter-animate`}>a</span>
      <span className={`${styles.letter} letter-animate`}>s</span>
      <br />
      <span className={`${styles.letter} ${styles["letter-space"]} letter-animate`}>F</span>
      <span className={`${styles.letter} letter-animate`}>e</span>
      <span className={`${styles.letter} letter-animate`}>r</span>
      <span className={`${styles.letter} letter-animate`}>r</span>
      <span className={`${styles.letter} letter-animate`}>a</span>
      <span className={`${styles.letter} letter-animate`}>r</span>
      <span className={`${styles.letter} letter-animate`}>o</span>
    </h1>
  );
};

// forwardref
