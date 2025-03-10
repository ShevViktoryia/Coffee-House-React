import { useState } from "react";
import { Button } from "../../../Button/Button";
import { dataFilters, SIZE_FILTERS } from "./mocks";
import s from "./ModalFilters.module.css";

interface ModalFiltersProps {
  changeMode: (e: string) => void;
}

export const ModalFilters = ({ changeMode }: ModalFiltersProps) => {
  const [activeButton, setActiveButton] = useState<string>(
    SIZE_FILTERS[0].text
  );

  return (
    <>
      {dataFilters.map((data) => (
        <div key={data.title}>
          <p className={s.filterTitle}>{data.title}</p>
          <div className={s.btnsContainer}>
            {data.items.map((size) => (
              <Button
                key={`${size.size}-${size.text}`}
                className={s.modalBtn}
                size={size.size}
                text={size.text}
                isActive={activeButton === size.text}
                setIsActive={setActiveButton}
                onClick={changeMode}
              />
            ))}
          </div>
        </div>
      ))}
    </>
  );
};
