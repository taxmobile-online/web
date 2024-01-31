import React from "react";
import { useNavigate } from "react-router-dom";

import { Actions, Card, Wrapper } from "./style";

import Button from "Components/Atoms/Button";
import { Input } from "Components/Atoms/Input";
import Typography from "Components/Atoms/Typography";
import { PlanOption } from "Components/Molecules/PlanOption";
import { PricingSetupForm } from "Components/Organisms/Forms";

// Type defination
interface Props {}

// Component
const PricingSetup: React.FC<Props> = () => {
  //   Hooks
  const navigate = useNavigate();

  // Data to display
  return (
    <Wrapper>
      <Typography as="h3" className="h-37" text="Pricing set-up" />
      <Typography as="p" className="p-17 mt-10">
        pricing set plans for taxmobile community
      </Typography>

      <PricingSetupForm />
    </Wrapper>
  );
};

export default PricingSetup;
