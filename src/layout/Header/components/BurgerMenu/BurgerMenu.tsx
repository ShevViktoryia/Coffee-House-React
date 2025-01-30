import cup from "../../../../assets/svg/coffee-cup.svg";
import s from "./BurgerMenu.module.css";

export const BurgerMenu = () => {
  return (
    <div className={s.burgerMenu}>
      <span>Menu</span>
      <img src={cup} alt="cup" />
    </div>
  );
};
