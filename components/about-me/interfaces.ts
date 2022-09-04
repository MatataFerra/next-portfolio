export interface PropsIcon {
  width: number;
  height: number;
  fill: string;
}

export interface StateButtonClickProps {
  [key: string | number]: boolean;
}

export interface HistoriesProps {
  [key: string | number]: {
    title: string;
    content: React.ReactNode;
  };
}
