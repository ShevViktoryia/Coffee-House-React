import { FilterBtns } from "../../components/FilterBtns/FilterBtns";
import s from "./CoffeePage.module.css";
import { CoffeeList } from "./components/CoffeeList/CoffeeList";

export const CoffeePage = () => {
  return (
    <section className={s.coffeeMenu}>
      <div className="container">
        <h1>
          Behind each of our cups hides an <span>amazing surprise</span>
        </h1>
        <FilterBtns />
        <CoffeeList />
      </div>
    </section>
  );
};
