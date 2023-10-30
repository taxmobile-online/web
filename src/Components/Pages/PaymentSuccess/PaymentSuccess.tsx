import React from "react";
import { Container, Wrapper } from "./style";
import { DashboardTemplate } from "Components/Templates/DashboardTemplate";
import Typography from "Components/Atoms/Typography";
import { Success } from "Components/Atoms/SvgIcons";
import Button from "Components/Atoms/Button";

// Type defination
interface Props {}

// Component
const PaymentSuccess: React.FC<Props> = () => {
  // Data to display
  return (
    <DashboardTemplate>
      <Wrapper>
        <Container>
          <Success width={60} height={60} />
          <Typography
            as="h4"
            className="h-24 mt-20"
            text="Payment successful!"
          />
          <Typography
            as="p"
            className="p-14 mt-15 mb-40"
            text="Congratulation your payment was successful."
          />
          <Button className="btn btn-primary btn-big" value="Continue" />
        </Container>

        <Typography
          as="p"
          className="p-15 text-uppercase mt-30"
          text="SECURED BY TAXMOBILE"
        />
      </Wrapper>
    </DashboardTemplate>
  );
};

export default PaymentSuccess;
