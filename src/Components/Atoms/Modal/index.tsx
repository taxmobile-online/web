import React from "react";
import { RightModal } from "./style";

// Type defination
interface Props {
  children?: JSX.Element | string;
  position?: "center" | "right" | "left";
}

// Component
const Modal: React.FC<Props> = (props) => {
  // Props
  const { position, children } = props;

  // Data to display
  return <RightModal> </RightModal>;
};

export default Modal;
