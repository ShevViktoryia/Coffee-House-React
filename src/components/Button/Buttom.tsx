import s from "./Button.module.css";

interface Props {
  text: string;
  imgLink: string;
}

export const Buttom = ({ text, imgLink }: Props) => {
  return (
    <button className={s.filterBtn}>
      <span className={s.filterIcon}>
        <img src={imgLink} alt="icon" />
      </span>
      {text}
    </button>
  );
};
