import { FC } from "react";

interface Props {
  width?: number;
  height?: number;
}

export const AddIcon: FC<Props> = ({ width = 24, height = 24 }) => (
  <svg width={width} height={height} xmlns='http://www.w3.org/2000/svg'>
    <path fill='none' d='M0 0h24v24H0z' />
    <path d='M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z' />
  </svg>
);
