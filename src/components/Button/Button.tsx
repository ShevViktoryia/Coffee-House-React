import s from "./Button.module.css";

interface Props {
  text: "coffee" | "tea" | "dessert";
  imgLink?: string;
  size?: number;
  onClick: (value: "coffee" | "tea" | "dessert") => void;
}

export const Button = ({ text, imgLink, size, onClick }: Props) => {
  return (
    <button className={s.filterBtn} onClick={() => onClick(text)}>
      <span className={s.filterIcon}>
        {imgLink ? <img src={imgLink} alt="icon" /> : size}
      </span>
      {text}
    </button>
  );
};
