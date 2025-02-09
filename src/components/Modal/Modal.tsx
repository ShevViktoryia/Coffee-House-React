import { useRef } from "react";

export interface ProductProps {
  id: string;
  img: string;
  title: string;
  description: string;
  cost: number;
}

export const Modal = (props: ProductProps) => {
  const modalRef = useRef(null);
  return (
    <div ref={modalRef}>
      <h3> {props.title} </h3>
      <p> {props.description} </p>
    </div>
  );
};

