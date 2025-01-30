import { BurgerMenu } from "./components/BurgerMenu/BurgerMenu";
import { HeaderNav } from "./components/HeaderNav/HeaderNav";
import logo from "../../assets/svg/logo.svg";
import s from "./Header.module.css";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className={s.headerContent}>
          <a href="#" className="logo">
            <img src={logo} alt="logo" />
          </a>
          <HeaderNav />
          <BurgerMenu />
        </div>
      </div>
    </header>
  );
};
