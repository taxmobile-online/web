import React, { useEffect, useState } from "react";
import { Wrapper } from "./style";
import Button from "Components/Atoms/Button";
import useAuthStore from "Store/auth.store";

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

  // Store
  const { setPlanDuration } = useAuthStore();

  // Props
  const { className } = props;

  // Effects
  useEffect(() => {
    setPlanDuration!("MONTHLY");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Data to display
  return (
    <Wrapper className={`${className} ${duration === yearly ? "active" : ""}`}>
      <Button
        value="Monthly"
        className="plan-option__btn"
        onClick={() => {
          setDuration(monthly);
          setPlanDuration!("MONTHLY");
        }}
      />
      <Button
        value="Yearly"
        className="plan-option__btn"
        onClick={() => {
          setDuration(yearly);
          setPlanDuration!("YEARLY");
        }}
      />
    </Wrapper>
  );
};

export default PlanOption;
