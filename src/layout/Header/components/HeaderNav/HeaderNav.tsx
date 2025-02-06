import { Link } from "react-router-dom";
import s from "./HeaderNav.module.css";

export const HeaderNav = () => {
  return (
    <nav className={s.navigation}>
      <ul className={s.navigationItems}>
        <li className={s.navigationItem}>
          <Link to="/menu">Favorite coffee</Link>
        </li>
        <li className={s.navigationItem}>
          <a href={"#about"}>About</a>
        </li>
        <li className={s.navigationItem}>
          <a href={"#mobile-app"}>Mobile app</a>
        </li>
        <li className={s.navigationItem}>
          <a href={"#contacts"}>Contact us</a>
        </li>
      </ul>
    </nav>
  );
};
