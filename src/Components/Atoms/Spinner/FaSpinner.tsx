import React from "react";
import { FaSpinnerStyle } from "./style";

interface Props {}
const FaSpinner: React.FC<Props> = () => {
  return (
    <FaSpinnerStyle>
      <i className="fas fa-spinner"></i>
    </FaSpinnerStyle>
  );
};

export default FaSpinner;
