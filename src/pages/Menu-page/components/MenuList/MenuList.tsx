import { MENU_DATA } from "../../mocks";
import s from "./MenuList.module.css";

interface MenuListProps {
  mode: string;
}

export const MenuList = ({ mode }: MenuListProps) => {
  return (
    <section className={s.menuSection}>
      <div className="container">
        <div className={s.menuList}>
          {MENU_DATA.map((menu) => {
            const menuItems =
              mode === "coffee"
                ? menu.coffee
                : mode === "tea"
                ? menu.tea
                : menu.dessert;
            if (!menuItems) return null;
            return menuItems.map((item) => (
              <div key={item.id} className={s.menuCard}>
                <img src={item.img} alt={item.title} />
                <div className={s.description}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <p>${item.cost}</p>
                </div>
              </div>
            ));
          })}
        </div>
      </div>
    </section>
  );
};
