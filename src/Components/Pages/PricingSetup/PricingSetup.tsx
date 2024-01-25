import React from "react";
import { useNavigate } from "react-router-dom";

import { Actions, Card, Wrapper } from "./style";

import Button from "Components/Atoms/Button";
import { Input } from "Components/Atoms/Input";
import Typography from "Components/Atoms/Typography";
import { PlanOption } from "Components/Molecules/PlanOption";

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

      <PlanOption className="mt-60 mb-40" />

      <Card>
        <Typography
          as="h5"
          className="h-38 pb-15 mb-50"
          text="Create pricing set-up"
        />

        <Input label="Account type" />
        <Input label="Price" />

        <Actions className="mt-90">
          <Button
            className="btn-secondary btn-md"
            onClick={() => navigate("/admin/pricing")}
          >
            Cancel
          </Button>
          <Button className="btn-primary btn-md">Update</Button>
        </Actions>
      </Card>
    </Wrapper>
  );
};

export default PricingSetup;
