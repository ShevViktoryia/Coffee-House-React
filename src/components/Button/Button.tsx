import clsx from "clsx";
import s from "./Button.module.css";

interface Props {
  text: string;
  imgLink?: string;
  size?: string;
  isActive: boolean;
  className?: string;
  setIsActive: (str: string) => void;
  onClick: (value: string) => void;
}

export const Button = ({
  text,
  imgLink,
  size,
  isActive,
  className,
  setIsActive,
  onClick,
}: Props) => {
  const handleClick = () => {
    setIsActive(text);
    onClick(text);
  };
  return (
    <button
      className={clsx(
        clsx(s.filterBtn, className),
        isActive && clsx(s.activeBtn, className)
      )}
      onClick={handleClick}
    >
      <span className={s.filterIcon}>
        {imgLink ? <img src={imgLink} alt="icon" /> : size}
      </span>
      {text}
    </button>
  );
};
