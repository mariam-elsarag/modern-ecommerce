import { useNavigate } from "react-router";
import type { ButtonProps } from "./Button.types";
import Spinner from "~/components/loaders/Spinner";

const Button = ({
  to,
  text,
  icon,
  iconDirection = "right",
  variant = "primary",
  type = "button",
  loading,
  hasFullWidth = false,
  handleClick,
  isCenterd = true,
  disabled = false,
}: ButtonProps) => {
  const navigate = useNavigate();

  const base = `
    ${hasFullWidth ? "w-full" : "w-fit"}
   h-[40px] md:h-[44px] flex items-center rounded-[4px] body font-medium py-3 px-5 md:px-6 transition-all ease-in-out duration-300
    ${isCenterd && "justify-center text-center"}
   ${loading || disabled ? "cursor-default" : "cursor-pointer"}
  `;

  const styles = {
    primary: `bg-neutral-black-900 text-white hover:bg-neutral-black-800`,
    outline:
      "bg-white border border-neutral-black-200 text-neutral-black-500 hover:border-transparent hover:text-neutral-black-900 ",

    outline_dark:
      "bg-white border border-neutral-black-900 text-neutral-black-900 ",
  };

  return (
    <button
      type={type}
      className={`${base} ${styles[variant]}`}
      disabled={loading || disabled}
      onClick={() => {
        if (to) navigate(to);
        if (handleClick) handleClick();
      }}
    >
      {iconDirection === "left" && (loading ? <Spinner /> : icon)}
      {text && <span>{text}</span>}
      {iconDirection === "right" && (loading ? <Spinner /> : icon)}
    </button>
  );
};

export default Button;
