import React, { AllHTMLAttributes } from "react";
import { SpinnerStyle } from "./style";

interface Props extends AllHTMLAttributes<HTMLDivElement> {}
const Spinner: React.FC<Props> = (props) => {
  return <SpinnerStyle {...props}></SpinnerStyle>;
};

export default Spinner;
