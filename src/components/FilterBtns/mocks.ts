import coffeeCup from "../../assets/img/coffee.png";
import tea from "../../assets/img/tea🫖.png";
import cake from "../../assets/img/cake.png";

const filters: ("coffee" | "tea" | "dessert")[] = ["coffee", "tea", "dessert"];

const FILTERS = [
  {
    img: coffeeCup,
    text: filters[0],
  },
  {
    img: tea,
    text: filters[1],
  },
  {
    img: cake,
    text: filters[2],
  },
];

export default FILTERS;
