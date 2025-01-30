import s from "./HeaderNav.module.css";

export const HeaderNav = () => {
  return (
    <nav className={s.navigation}>
      <ul className={s.navigationItems}>
        <li className={s.navigationItem}>
          <a href="#">Favorite coffee</a>
        </li>
        <li className={s.navigationItem}>
          <a href="#">About</a>
        </li>
        <li className={s.navigationItem}>
          <a href="#">Mobile app</a>
        </li>
        <li className={s.navigationItem}>
          <a href="#">Contact us</a>
        </li>
      </ul>
    </nav>
  );
};
