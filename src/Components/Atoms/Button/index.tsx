import React from "react";

import { ButtonStyle } from "./style";
import { ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = (props) => {
  const { children, value, type = "button", ...otherProps } = props;
  return (
    <ButtonStyle {...otherProps} type={type}>
      {value || children}
    </ButtonStyle>
  );
};

export default Button;
