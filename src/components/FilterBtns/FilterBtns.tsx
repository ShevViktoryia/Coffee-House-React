import { Button } from "../Button/Button";
import FILTERS from "./mocks";
import s from "./FilterBtns.module.css";
import { useState } from "react";

interface FilterBtnsProps {
  changeMode: (e: string) => void;
}

export const FilterBtns = ({ changeMode }: FilterBtnsProps) => {
  const [activeButton, setActiveButton] = useState<string>("coffee");
  return (
    <div className={s.filtersWrapper}>
      {FILTERS.map((filter) => (
        <Button
          key={filter.text}
          imgLink={filter.img}
          text={filter.text}
          isActive={activeButton === filter.text}
          setIsActive={setActiveButton}
          onClick={changeMode}
        />
      ))}
    </div>
  );
};
