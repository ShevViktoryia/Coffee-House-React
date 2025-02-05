import { useState } from "react";
import { FilterBtns } from "../../components/FilterBtns/FilterBtns";
import s from "./MenuPage.module.css";
import { MenuList } from "./components/MenuList/MenuList";

export const MenuPage = () => {
  const [mode, setMode] = useState<"coffee" | "tea" | "dessert">("coffee");

  return (
    <section className={s.menu}>
      <div className="container">
        <h1>
          Behind each of our cups hides an <span>amazing surprise</span>
        </h1>
        <FilterBtns changeMode={setMode} />
        <MenuList mode={mode} />
      </div>
    </section>
  );
};
