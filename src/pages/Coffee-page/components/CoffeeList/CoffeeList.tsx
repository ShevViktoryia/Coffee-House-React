import { COFFEE_DATA } from "../../mocks";
import s from "./CoffeeList.module.css";

export const CoffeeList = () => {
  return (
    <section className={s.coffeeSection}>
      <div className="container">
        <div className={s.coffeeList}>
          {COFFEE_DATA.map((coffee) => (
            <div key={coffee.id} className={s.coffeeCard}>
              <img src={coffee.img} alt={coffee.title} />
              <div className={s.description}>
                <h3>{coffee.title}</h3>
                <p>{coffee.description}</p>
                <p>${coffee.cost}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
