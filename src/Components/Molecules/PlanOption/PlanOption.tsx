import React, { useEffect, useState } from "react";

import { Wrapper } from "./style";

import Button from "Components/Atoms/Button";

import useAuthStore from "Store/auth.store";

// Type defination
interface Props {
  className?: string;
  getSelectedPlan?: (plan: string) => void;
}

// Variables
const monthly = "monthly";
const yearly = "yearly";

// Component
const PlanOption: React.FC<Props> = (props) => {
  // States
  const [duration, setDuration] = useState(monthly);

  // Store
  const { setPricingId } = useAuthStore();

  // Props
  const { className, getSelectedPlan } = props;

  // Effects
  useEffect(() => {
    setPricingId!("MONTHLY");
    getSelectedPlan!("MONTHLY");

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
          setPricingId!("MONTHLY");
          getSelectedPlan!("MONTHLY");
        }}
      />
      <Button
        value="Yearly"
        className="plan-option__btn"
        onClick={() => {
          setDuration(yearly);
          setPricingId!("YEARLY");
          getSelectedPlan!("YEARLY");
        }}
      />
    </Wrapper>
  );
};

export default PlanOption;
