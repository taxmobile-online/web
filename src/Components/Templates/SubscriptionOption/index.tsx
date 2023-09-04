import React from "react";
import { Container, Wrapper } from "./style";
import Typography from "Components/Atoms/Typography";
import PriceSwitch from "./PriceSwitch";
import PlanOption from "./PlanOption";

interface Props {}
const SubscriptionOption: React.FC<Props> = () => {
  return (
    <Wrapper>
      <Container>
        <Typography
          as="h3"
          className="h-7 text-center max-width-430 mx-auto mb-50"
          text="Choose A Subscription Plan"
        />
        <PriceSwitch />
        <PlanOption className="mt-40" />
      </Container>
    </Wrapper>
  );
};

export default SubscriptionOption;
