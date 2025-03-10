const size_filters: string[] = ["200 ml", "300 ml", "400 ml"];

export const SIZE_FILTERS = [
  {
    size: "S",
    text: size_filters[0],
  },
  {
    size: "M",
    text: size_filters[1],
  },
  {
    size: "L",
    text: size_filters[2],
  },
];

const additives_filter: string[] = ["Sugar", "Cinnamon", "Syrup"];
export const ADDITIVES_FILTER = [
  {
    size: "1",
    text: additives_filter[0],
  },
  {
    size: "2",
    text: additives_filter[1],
  },
  {
    size: "3",
    text: additives_filter[2],
  },
];

export const dataFilters = [
  { title: "Size", items: SIZE_FILTERS },
  { title: "Additives", items: ADDITIVES_FILTER },
];
