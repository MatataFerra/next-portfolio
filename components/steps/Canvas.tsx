import { forwardRef, useRef, useEffect } from "react";
import styles from "./canvas.module.scss";

interface CanvasProps {
  width?: string;
  height?: string;
}

// eslint-disable-next-line react/display-name
export const CanvasSteps = forwardRef<HTMLCanvasElement, CanvasProps>(
  ({ width = "500", height = "500" }, ref) => {
    return <canvas className={styles.canvas} id='canvas' width={width} height={height} ref={ref} />;
  }
);

export const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const CANVAS_WIDTH = (canvas.width = 120);
    const CANVAS_HEIGHT = (canvas.height = 150);

    const playerImage = new Image();
    playerImage.src = "assets/images/steps/zelda.png";
    // spriteWidth -> ancho de la imagen dividido por cantidad de columnas
    // spriteHeight -> alto de la imagen dividido por cantidad de filas
    const spriteWidth = 120;
    const spriteHeight = 130;
    // frame -> frame actual
    let frameX = 0;
    let frameY = 4;
    let ani: any = null;

    // gameFrame y staggerFrames se utilizan para que la animación no sea tan rápida
    let gameFrame = 0;
    const staggerFrames = 5;
    function animate() {
      ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      // s -> source es decir donde comienza
      // d -> destination es decir donde termina
      // ctx.drawImage(playerImage, sx,sy, sw, sh, dx, dy, dw, dh);
      ctx.drawImage(
        playerImage,
        frameX * spriteWidth,
        frameY * spriteHeight,
        spriteWidth,
        spriteHeight,
        0,
        0,
        spriteWidth,
        spriteHeight
      );
      if (gameFrame % staggerFrames === 0) {
        if (frameX < 9) frameX++;
        else frameX = 0;
      }

      gameFrame++;

      ani = window.requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.cancelAnimationFrame(ani);
    };
  }, []);

  return <CanvasSteps ref={canvasRef} />;
};
