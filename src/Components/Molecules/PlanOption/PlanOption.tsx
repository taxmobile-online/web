import React, { useState } from "react";
import { Wrapper } from "./style";
import Button from "Components/Atoms/Button";

// Type defination
interface Props {
  className?: string;
}

// Variables
const monthly = "monthly";
const yearly = "yearly";

// Component
const PlanOption: React.FC<Props> = (props) => {
  // States
  const [duration, setDuration] = useState(monthly);

  // Props
  const { className } = props;

  // Data to display
  return (
    <Wrapper className={`${className} ${duration === yearly ? "active" : ""}`}>
      <Button
        value="Monthly"
        className="plan-option__btn"
        onClick={() => setDuration(monthly)}
      />
      <Button
        value="Yearly"
        className="plan-option__btn"
        onClick={() => setDuration(yearly)}
      />
    </Wrapper>
  );
};

export default PlanOption;
