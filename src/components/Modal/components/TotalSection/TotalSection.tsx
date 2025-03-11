import s from "./TotalSection.module.css";
import infoIcon from "../../../../assets/svg/info-empty.svg";

interface TotalSectionProps {
  price: string;
}

export const TotalSection = ({ price }: TotalSectionProps) => {
  return (
    <div className={s.totalContainer}>
      <div className={s.total}>
        <p>Total: </p>
        <p>${price}</p>
      </div>
      <div className={s.description}>
        <img src={infoIcon} alt="info" />
        <small>
          The cost is not final. Download our mobile app to see the final price
          and place your order. Earn loyalty points and enjoy your favorite
          coffee with up to 20% discount.
        </small>
      </div>
    </div>
  );
};
