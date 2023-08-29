import React from "react";
import { Container, Wrapper } from "./style";
import Typography from "Components/Atoms/Typography";

interface Props {}
const SubscriptionOption: React.FC<Props> = () => {
  return (
    <Wrapper>
      <Container>
        <Typography
          as="h3"
          className="h-7 text-center max-width-430 mx-auto"
          text="Choose A Subscription Plan"
        />
      </Container>
    </Wrapper>
  );
};

export default SubscriptionOption;
