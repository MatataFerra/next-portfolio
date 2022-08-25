import { forwardRef } from "react";
import Image from "next/image";

interface Props {
  src: string;
  alt: string;
  className: string;
  width: number;
  height: number;
}

// eslint-disable-next-line react/display-name
export const ImageForwardRef = forwardRef<HTMLDivElement, Props>(
  ({ src, alt, className, width, height }, ref) => {
    return (
      <div ref={ref} className={className}>
        <Image src={src} alt={alt} width={width} height={height} />
      </div>
    );
  }
);
