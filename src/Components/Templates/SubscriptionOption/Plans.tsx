import React from "react";
import { PlansWrapper as Wrapper, PlanCard, SubscriberQuantity } from "./style";
import Typography from "Components/Atoms/Typography";
import Button from "Components/Atoms/Button";

// Type defination
interface Props {}

// Component
const Plans: React.FC<Props> = () => {
  // Data to display
  return (
    <Wrapper>
      <div>
        <PlanCard className="secondary">
          <Typography as="h4" className="h-9 mb-35" text="Personal" />
          <Typography as="h4" className="h-10">
            <>
              <sup className="p-5">NGN</sup> <span className="">521</span>
              <sub className="p-5">/Mon</sub>
            </>
          </Typography>
          <Typography as="p" className="p-4" text="A single user account" />
          <Button value="Subscribe Now" className="mt-70 btn-secondary" />
        </PlanCard>
      </div>

      <div>
        <PlanCard className="primary">
          <Typography as="h4" className="h-9 mb-35" text="Corperate" />
          <Typography as="h4" className="h-10">
            <>
              <sup className="p-5">NGN</sup> <span className="">521</span>
              <sub className="p-5">/Mon</sub>
            </>
          </Typography>
          <Typography
            as="p"
            className="p-4"
            text="One account, multiple users "
          />

          <SubscriberQuantity>
            <Typography
              as="p"
              className="p-6 text-center"
              text="5 - 10 Subscribers"
            />
          </SubscriberQuantity>

          <Button value="Subscribe Now" className="mt-40 btn-primary" />
        </PlanCard>
      </div>
    </Wrapper>
  );
};

export default Plans;
