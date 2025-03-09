import { useState } from "react";
import { Button } from "../../../Button/Button";
import SIZE_FILTERS from "./mocks";
import s from "./ModalFilters.module.css";

interface ModalFiltersProps {
  changeMode: (e: string) => void;
}

export const ModalFilters = ({ changeMode }: ModalFiltersProps) => {
  const [activeButton, setActiveButton] = useState<string>(
    SIZE_FILTERS[0].text
  );
  return (
    <div>
      <p>Size</p>
      <div className={s.btnsContainer}>
        {SIZE_FILTERS.map((size, ind) => (
          <Button
            key={`size${ind}`}
            size={size.size}
            text={size.text}
            isActive={activeButton === size.text}
            setIsActive={setActiveButton}
            onClick={changeMode}
          />
        ))}
      </div>
    </div>
  );
};
