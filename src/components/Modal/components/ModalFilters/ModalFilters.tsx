import { Button } from "../../../Button/Button";
import SIZE_FILTERS from "./mocks";

export const ModalFilters = () => {
  return (
    <div>
      <p>Size</p>
      {SIZE_FILTERS.map((size, ind) => (
        <Button key={`size${ind}`} text={filter.text} onClick={changeMode} />
      ))}
    </div>
  );
};
