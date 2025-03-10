import { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { Product } from "../../pages/Menu-page/mocks";
import s from "./Modal.module.css";
import { ModalFilters } from "./components/ModalFilters/ModalFilters";
import { TotalSection } from "./components/TotalSection/TotalSection";

export interface ProductProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product;
}

export const Modal = ({ isOpen, product, onClose }: ProductProps) => {
  const [mode, setMode] = useState("");
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
          <ModalFilters changeMode={setMode} />
          <TotalSection price={product.cost} />
        </div>
      </div>
    </div>,
    document.getElementById("modal-product")!
  );
};
