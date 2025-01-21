import first_coffee from "../../assets/svg/coffee-slider-1.svg";
import second_coffee from "../../assets/svg/coffee-slider-2.svg";
import third_coffee from "../../assets/svg/coffee-slider-3.svg";
import "./FavouriteCoffee.css";

export const FavouriteCoffee = () => {
  return (
    <section className="favouriteCoffee">
      <div className="container">
        <h2>
          Choose your <span>favorite</span> coffee
        </h2>
        <div className="carusel">
          <div className="caruselItems">
            <div className="caruselItem">
              <img src={first_coffee} alt="first_coffee" />

              <div className="caruselItemContent">
                <h3>S’mores Frappuccino</h3>
                <p>
                  This new drink takes an espresso and mixes it with brown sugar
                  and cinnamon before being topped with oat milk.
                </p>
                <p className="coffeeCost">$5.50</p>
              </div>
            </div>
            <div className="caruselItem">
              <img src={second_coffee} alt="second_coffee" />

              <div className="caruselItemContent">
                <h3>Caramel Macchiato</h3>
                <p>
                  Fragrant and unique classic espresso with rich caramel-peanut
                  syrup, with cream under whipped thick foam.
                </p>
                <p className="coffeeCost">$5.00</p>
              </div>
            </div>
            <div className="caruselItem">
              <img src={third_coffee} alt="third_coffee" />
              <div className="caruselItemContent">
                <h3>Ice coffee</h3>
                <p>
                  A popular summer drink that tones and invigorates. Prepared
                  from coffee, milk and ice.
                </p>
                <p className="coffeeCost">$4.50</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
