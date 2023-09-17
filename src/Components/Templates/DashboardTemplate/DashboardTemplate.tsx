import React from "react";

import { Body, Wrapper } from "./style";
import { TopNav } from "Components/Molecules/TopNav";
import { Center } from "Styles/layouts/Center";

// Type defination
interface Props {
  children?: JSX.Element | string | number;
}

// Component
const DashboardTemplate: React.FC<Props> = ({ children }) => {
  // Data to display
  return (
    <Wrapper>
      <TopNav />
      <Body>
        <Center>{children}</Center>
      </Body>
    </Wrapper>
  );
};

export default DashboardTemplate;
