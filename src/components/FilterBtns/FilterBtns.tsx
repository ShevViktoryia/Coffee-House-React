import { Button } from "../Button/Button";
import FILTERS from "./mocks";
import s from "./FilterBtns.module.css";

interface FilterBtnsProps {
  changeMode: (e: string) => void;
}

export const FilterBtns = ({ changeMode }: FilterBtnsProps) => {
  return (
    <div className={s.filtersWrapper}>
      {FILTERS.map((filter) => (
        <Button imgLink={filter.img} text={filter.text} onClick={changeMode} />
      ))}
    </div>
  );
};
