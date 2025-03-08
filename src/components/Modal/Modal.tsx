import { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { Product } from "../../pages/Menu-page/mocks";
import s from "./Modal.module.css";

export interface ProductProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product;
}

export const Modal = ({ isOpen, product, onClose }: ProductProps) => {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className={s["modal-overlay"]}>
      <div className={s["modal-content"]}>
        <img src={product.img} alt={product.title} />
        <div className={s["text-content"]}>
          <h3> {product.title} </h3>
          <p> {product.description} </p>
        </div>
      </div>
    </div>,
    document.getElementById("modal-product")!
  );
};
