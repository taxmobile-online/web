import React from "react";
import { SubscriptionRange, Wrapper } from "./style";
import { Flex } from "Styles/layouts/Flex";
import Typography from "Components/Atoms/Typography";
import { Link } from "react-router-dom";
import { ArrowRight } from "Components/Atoms/SvgIcons";

// Type defination
interface Props {
  size?: "small" | "full";
}

// Component
const SubscriptionUpgradeBox: React.FC<Props> = ({ size }) => {
  // Data to display
  return (
    <Wrapper size={size}>
      <Flex $gap="1rem" className="mb-30" $flexRowJcBetweenAiCenter>
        <Typography as="h6" className="h-21" text="Subscription plan" />

        <SubscriptionRange>10-30</SubscriptionRange>
      </Flex>
      <Link to="/billing" className="l-4 flex-row">
        Upgrade subscription plan
        <ArrowRight />
      </Link>
    </Wrapper>
  );
};

export default SubscriptionUpgradeBox;
