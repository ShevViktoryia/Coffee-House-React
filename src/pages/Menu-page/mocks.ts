import coffee1 from "../../assets/img/coffee-1.png";
import coffee2 from "../../assets/img/coffee-2.png";
import coffee3 from "../../assets/img/coffee-3.png";
import coffee4 from "../../assets/img/coffee-4.png";
import coffee5 from "../../assets/img/coffee-5.png";
import coffee6 from "../../assets/img/coffee-6.png";
import coffee7 from "../../assets/img/coffee-7.png";
import coffee8 from "../../assets/img/coffee-8.png";
import tea1 from "../../assets/img/tea-1.png";
import tea2 from "../../assets/img/tea-2.png";
import tea3 from "../../assets/img/tea-3.png";
import tea4 from "../../assets/img/tea-4.png";
import dessert1 from "../../assets/img/dessert-1.png";
import dessert2 from "../../assets/img/dessert-2.png";
import dessert3 from "../../assets/img/dessert-3.png";
import dessert4 from "../../assets/img/dessert-4.png";
import dessert5 from "../../assets/img/dessert-5.png";
import dessert6 from "../../assets/img/dessert-6.png";
import dessert7 from "../../assets/img/dessert-7.png";
import dessert8 from "../../assets/img/dessert-8.png";

export type Product = {
  id: string;
  img: string;
  title: string;
  description: string;
  cost: string;
};

export const MENU_DATA = [
  {
    coffee: [
      {
        id: "coffe-1",
        img: coffee1,
        title: "Irish coffee",
        description:
          "Fragrant black coffee with Jameson Irish whiskey and whipped milk",
        cost: "7.00",
      },
      {
        id: "coffe-2",
        img: coffee2,
        title: "Kahlua coffee",
        description:
          "Classic coffee with milk and Kahlua liqueur under a cap of frothed milk",
        cost: "7.00",
      },
      {
        id: "coffe-3",
        img: coffee3,
        title: "Honey raf",
        description: "Espresso with frothed milk, cream and aromatic honey",
        cost: "5.50",
      },
      {
        id: "coffe-4",
        img: coffee4,
        title: "Ice cappuccino",
        description:
          "Cappuccino with soft thick foam in summer version with ice",
        cost: "5.00",
      },
      {
        id: "coffe-5",
        img: coffee5,
        title: "Espresso",
        description: "Classic black coffee",
        cost: "4.50",
      },
      {
        id: "coffe-6",
        img: coffee6,
        title: "Latte",
        description:
          "Espresso coffee with the addition of steamed milk and dense milk foam",
        cost: "5.50",
      },
      {
        id: "coffe-7",
        img: coffee7,
        title: "Latte macchiato",
        description: "Espresso with frothed milk and chocolate",
        cost: "5.50",
      },
      {
        id: "coffe-8",
        img: coffee8,
        title: "Coffee with cognac",
        description: "Fragrant black coffee with cognac and whipped cream",
        cost: "6.50",
      },
    ],
  },
  {
    tea: [
      {
        id: "tea-1",
        img: tea1,
        title: "Moroccan",
        description:
          "Fragrant black tea with the addition of tangerine, cinnamon, honey, lemon and mint",
        cost: "4.50",
      },
      {
        id: "tea-2",
        img: tea2,
        title: "Ginger",
        description: "Original black tea with fresh ginger, lemon and honey",
        cost: "5.00",
      },
      {
        id: "tea-3",
        img: tea3,
        title: "Cranberry",
        description: "Invigorating black tea with cranberry and honey",
        cost: "5.00",
      },
      {
        id: "tea-4",
        img: tea4,
        title: "Sea buckthorn",
        description:
          "Toning sweet black tea with sea buckthorn, fresh thyme and cinnamon",
        cost: "5.50",
      },
    ],
  },
  {
    dessert: [
      {
        id: "dessert-1",
        img: dessert1,
        title: "Marble cheesecake",
        description:
          "Philadelphia cheese with lemon zest on a light sponge cake and red currant jam",
        cost: "3.50",
      },
      {
        id: "dessert-2",
        img: dessert2,
        title: "Red velvet",
        description: "Layer cake with cream cheese frosting",
        cost: "4.00",
      },
      {
        id: "dessert-3",
        img: dessert3,
        title: "Cheesecakes",
        description:
          "Soft cottage cheese pancakes with sour cream and fresh berries and sprinkled with powdered sugar",
        cost: "4.50",
      },
      {
        id: "dessert-4",
        img: dessert4,
        title: "Creme brulee",
        description:
          "Delicate creamy dessert in a caramel basket with wild berries",
        cost: "4.00",
      },
      {
        id: "dessert-5",
        img: dessert5,
        title: "Pancakes",
        description:
          "Tender pancakes with strawberry jam and fresh strawberries",
        cost: "4.50",
      },
      {
        id: "dessert-6",
        img: dessert6,
        title: "Honey cake",
        description: "Classic honey cake with delicate custard",
        cost: "4.50",
      },
      {
        id: "dessert-7",
        img: dessert7,
        title: "Chocolate cake",
        description:
          "Cake with hot chocolate filling and nuts with dried apricots",
        cost: "5.50",
      },
      {
        id: "dessert-8",
        img: dessert8,
        title: "Black forest",
        description:
          "A combination of thin sponge cake with cherry jam and light chocolate mousse",
        cost: "6.50",
      },
    ],
  },
];
