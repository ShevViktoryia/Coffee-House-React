import { Button } from "../Button/Button";
import FILTERS from "./mocks";
import s from "./FilterBtns.module.css";

export const FilterBtns = () => {
  return (
    <div className={s.filtersWrapper}>
      {FILTERS.map((filter) => (
        <Button imgLink={filter.img} text={filter.text} />
      ))}
    </div>
  );
};
