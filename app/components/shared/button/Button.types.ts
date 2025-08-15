export type ButtonProps = {
  to?: string;
  text?: string | null;
  icon?: React.ReactNode;
  iconDirection?: "right" | "left";
  round?: "sm" | "lg" | "full";
  size?: "sm" | "lg";
  variant?: "primary" | "outline" | "outline_dark";
  type?: "submit" | "button";
  loading?: boolean;
  hasFullWidth?: boolean;
  isCenterd?: boolean;
  disabled?: boolean;
  handleClick?: () => void;
};
