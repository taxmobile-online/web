import { Check } from "Components/Atoms/SvgIcons";
import Typography from "Components/Atoms/Typography";
import React from "react";
import { Flex } from "Styles/layouts/Flex";

interface Props {
  item: string;
}

const HeroListItem: React.FC<Props> = ({ item }) => {
  return (
    <Flex gap="1rem" flexRowAiCenter>
      <Check />
      <Typography as="h4" className="h-4" text={item} />
    </Flex>
  );
};

export default HeroListItem;
