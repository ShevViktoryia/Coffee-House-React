import { BurgerMenu } from "./components/BurgerMenu/BurgerMenu";
import { HeaderNav } from "./components/HeaderNav/HeaderNav";
import logo from "../../assets/svg/logo.svg";
import s from "./Header.module.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className={s.headerContent}>
          <Link to="/" className="logo">
            <img src={logo} alt="logo" />
          </Link>
          <HeaderNav />
          <BurgerMenu />
        </div>
      </div>
    </header>
  );
};
