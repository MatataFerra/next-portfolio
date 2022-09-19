import Image from "next/image";
import { FC, useState } from "react";
import styles from "./steps.module.scss";

// Este componente está sacado de este artículo:
// https://dev.to/anxiny/create-an-image-magnifier-with-react-3fd7

interface Props {
  src: string;
  width?: string;
  height?: string;
  magnifierHeight?: number;
  magnifieWidth?: number;
  zoomLevel?: number;
}

export const ImageMagnifier: FC<Props> = ({
  src,
  width,
  height,
  magnifierHeight = 100,
  magnifieWidth = 100,
  zoomLevel = 1.5,
}) => {
  const [[x, y], setXY] = useState([0, 0]);
  const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
  const [showMagnifier, setShowMagnifier] = useState(false);
  return (
    <div className={styles["image-magnifier"]}>
      <Image
        src={src}
        alt='hand'
        width={width ?? 200}
        height={height ?? 200}
        onMouseEnter={(e) => {
          const elem = e.currentTarget;
          const { width, height } = elem.getBoundingClientRect();
          setSize([width, height]);
          setShowMagnifier(true);
        }}
        onMouseMove={(e) => {
          const elem = e.currentTarget;
          const { top, left } = elem.getBoundingClientRect();
          const x = e.pageX - left - window.pageXOffset;
          const y = e.pageY - top - window.pageYOffset;
          setXY([x, y]);
        }}
        onMouseLeave={() => {
          // close magnifier
          setShowMagnifier(false);
        }}
      />

      <div
        style={{
          backgroundColor: "white",
          backgroundImage: `url('${src}')`,
          backgroundPositionX: `${-x * zoomLevel + magnifieWidth / 2}px`,
          backgroundPositionY: `${-y * zoomLevel + magnifierHeight / 2}px`,
          backgroundRepeat: "no-repeat",
          backgroundSize: `${imgWidth * zoomLevel}px ${imgHeight * zoomLevel}px`,
          border: "1px solid lightgray",
          borderRadius: "50%",
          display: showMagnifier ? "" : "none",
          height: `${magnifierHeight}px`,
          left: `${x - magnifieWidth / 2}px`,
          opacity: "1", // reduce opacity so you can verify position
          pointerEvents: "none",
          position: "absolute",
          top: `${y - magnifierHeight / 2}px`,
          width: `${magnifieWidth}px`,
        }}></div>
    </div>
  );
};
