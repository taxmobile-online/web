import React from "react";
import { ButtonStyle } from "./style";

interface Props {
  children?: any;
  value?: any;
  className?: string;
  disabled?: any;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
const Button: React.FC<Props> = (props) => {
  const { children, className, value } = props;
  return (
    <ButtonStyle className={className} {...props}>
      {value || children}
    </ButtonStyle>
  );
};

export default Button;
