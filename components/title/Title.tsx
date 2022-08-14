import { FC, useEffect, useRef } from "react";
import styles from "./title.module.scss";
import { LetsTalk, Name } from ".";
import { gsap } from "gsap";

export const Title: FC = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const tl = gsap.timeline();
  const q = gsap.utils.selector(divRef);
  useEffect(() => {
    if (divRef.current) {
      tl.to(q(".h2"), { opacity: 1, y: 0, duration: 0.7 }, 2).to(
        q(".p"),
        { opacity: 1, duration: 1, ease: "back.out(1.7)" },
        3
      );
    }
  }, [q, tl]);

  return (
    <div className={styles.div} ref={divRef}>
      <Name />
      <h2 className={`${styles.h2} h2`}>
        Crafting sites from <span className={styles.gradient}> ideas</span>
      </h2>
      <p className={`${styles.p} p`}>
        Desarrollador Frontend viviendo en Argentina (Buenos Aires). Con experiencia desarrollando
        aplicaciones web complejas con las últimas tecnologías
      </p>
    </div>
  );
};
