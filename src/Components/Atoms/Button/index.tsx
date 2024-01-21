import React from "react";

import { ButtonStyle } from "./style";
import { ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = (props) => {
  const { children, value, ...otherProps } = props;
  return <ButtonStyle {...otherProps}>{value || children}</ButtonStyle>;
};

export default Button;
