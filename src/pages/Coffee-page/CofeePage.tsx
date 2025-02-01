import s from "./CoffeePage.module.css";

export const CofeePage = () => {
  return (
    <section className={s.coffeeMenu}>
      <h1>
        Behind each of our cups hides an <span>amazing surprise</span>
      </h1>
      <FilterBtns />
    </section>
  );
};
