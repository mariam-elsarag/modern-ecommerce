export type ButtonProps = {
  to?: string;
  text?: string | null;
  icon?: React.ReactNode;
  iconDirection?: "right" | "left";
  variant?: "primary" | "outline" | "outline_dark";
  type?: "submit" | "button";
  loading?: boolean;
  hasFullWidth?: boolean;
  isCenterd?: boolean;
  disabled?: boolean;
  handleClick?: () => void;
};
