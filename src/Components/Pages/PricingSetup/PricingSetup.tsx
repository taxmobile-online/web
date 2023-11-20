import React, { useState } from "react";
import { Wrapper } from "./style";
import Typography from "Components/Atoms/Typography";
import { PriceSwitch } from "Components/Molecules/PriceSwitch";
import { PlanOption } from "Components/Molecules/PlanOption";

// Type defination
interface Props {}

// Component
const PricingSetup: React.FC<Props> = () => {
  // States
  const [, setShowModal] = useState<boolean>(false);

  // Data to display
  return (
    <Wrapper>
      <Typography as="h3" className="h-37" text="Pricing set-up" />
      <Typography as="p" className="p-17 mt-10">
        pricing set plans for taxmobile community
      </Typography>

      <PlanOption className="mt-60" />
    </Wrapper>
  );
};

export default PricingSetup;
