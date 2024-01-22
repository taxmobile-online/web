import React from "react";

import { Top, Wrapper } from "./style";

import {
  MaterialsIcon,
  PurchasesIcon,
  SubscriptionIcon,
  UsersIcon,
} from "Components/Atoms/SvgIcons";
import Typography from "Components/Atoms/Typography";
import { Flex } from "Styles/layouts/Flex";

// Type defination
interface Props {
  type: "subscription" | "users" | "purchases" | "materials";
}

const options = {
  subscription: { icon: <SubscriptionIcon />, label: "Subscription" },
  users: { icon: <UsersIcon />, label: "Users" },
  purchases: { icon: <PurchasesIcon />, label: "Purchases" },
  materials: { icon: <MaterialsIcon />, label: "Materials" },
};

// Component
const OverviewCard: React.FC<Props> = (props) => {
  // Props
  const { type } = props;

  //   Variables
  const option = options[type];

  // Data to display
  return (
    <Wrapper>
      <Top>
        {option.icon}
        <Typography as="h5" className="h-25" text={option.label} />
      </Top>

      {type !== "subscription" ? (
        <Typography
          as="h5"
          className="h-26 mt-30 mt-auto"
          text={"243,757,00"}
        />
      ) : (
        <>
          <Flex className="mt-22" $gap="1rem" $flexRowJcBetweenAiCenter>
            <Typography as="h5" className="h-27" text={"Individual"} />
            <Typography as="h5" className="h-28" text={"23"} />
          </Flex>

          <Flex className="mt-15" $gap="1rem" $flexRowJcBetweenAiCenter>
            <Typography as="h5" className="h-27" text={"Coperate"} />
            <Typography as="h5" className="h-28" text={"555"} />
          </Flex>
        </>
      )}
    </Wrapper>
  );
};

export default OverviewCard;
