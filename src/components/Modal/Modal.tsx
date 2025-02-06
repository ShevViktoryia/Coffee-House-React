import { title } from "process";

interface ModalProps {
  img: string;
  title: string;
  description: string;
  cost: number;
}

export const Modal = (props: ModalProps) => {
  return (
    <div>
      <h3> {props.title} </h3>
      <p> {props.description} </p>
    </div>
  );
};
