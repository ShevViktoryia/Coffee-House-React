import s from "./Button.module.css";

interface Props {
  text: "coffee" | "tea" | "dessert";
  imgLink: string;
  onClick: (value: "coffee" | "tea" | "dessert") => void;
}

export const Button = ({ text, imgLink, onClick }: Props) => {
  return (
    <button className={s.filterBtn} onClick={() => onClick(text)}>
      <span className={s.filterIcon}>
        <img src={imgLink} alt="icon" />
      </span>
      {text}
    </button>
  );
};
