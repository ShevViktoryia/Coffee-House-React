import { Button } from "../../../Button/Button";
import SIZE_FILTERS from "./mocks";

interface ModalFiltersProps {
  changeMode: (e: string) => void;
}

export const ModalFilters = ({ changeMode }: ModalFiltersProps) => {
  return (
    <div>
      <p>Size</p>
      {SIZE_FILTERS.map((size, ind) => (
        <Button
          key={`size${ind}`}
          size={size.size}
          text={size.text}
          onClick={changeMode}
        />
      ))}
    </div>
  );
};
