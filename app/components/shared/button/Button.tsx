import { useNavigate } from "react-router";
import type { ButtonProps } from "./Button.types";
import Spinner from "~/components/loaders/Spinner";
import { useTranslation } from "react-i18next";

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
  round = "sm",
  size = "lg",
}: ButtonProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const base = `
    ${hasFullWidth ? "w-full" : "w-fit"}
    flex items-center  body font-medium  transition-all ease-in-out duration-300
    ${isCenterd && "justify-center text-center"}
   ${loading || disabled ? "cursor-default" : "cursor-pointer"}
  ${disabled ? "!bg-neutral-black-100 !text-neutral-black-200" : ""} `;
  const radious = {
    sm: "rounded-[4px]",
    lg: "rounded-lg",

    full: "rounded-full",
  };
  const sizes = {
    sm: "h-[38px] px-4 py-3",
    lg: "h-[40px] md:h-[44px] py-3 px-5 md:px-6",
  };
  const styles = {
    primary: `bg-neutral-black-900 text-white hover:bg-neutral-black-800`,
    outline:
      "bg-white border border-neutral-black-200 text-neutral-black-500  hover:text-neutral-black-900 ",

    outline_dark:
      "bg-white border border-neutral-black-900 text-neutral-black-900 ",
  };

  return (
    <button
      type={type}
      className={`${base} ${styles[variant]} ${radious[round]} ${sizes[size]} `}
      disabled={loading || disabled}
      onClick={() => {
        if (to) navigate(to);
        if (handleClick) handleClick();
      }}
    >
      {iconDirection === "left" && (loading ? <Spinner /> : icon)}
      {text && <span>{t(text)}</span>}
      {iconDirection === "right" && (loading ? <Spinner /> : icon)}
    </button>
  );
};

export default Button;
