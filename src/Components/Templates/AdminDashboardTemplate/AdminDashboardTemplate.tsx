import React from "react";
import { Body, BodyWrapper, SideNavWrapper, Wrapper } from "./style";
import { SideNav } from "Components/Molecules/SideNav";
import { TopNav } from "Components/Molecules/TopNav";

// Type defination
interface Props {
  children?: JSX.Element;
}

// Component
const AdminDashboardTemplate: React.FC<Props> = ({ children }) => {
  // Data to display
  return (
    <Wrapper>
      <SideNavWrapper>
        <SideNav />
      </SideNavWrapper>
      <BodyWrapper>
        <TopNav type="admin" pageTitle="Dashboard" />
        <Body>{children}</Body>
      </BodyWrapper>
    </Wrapper>
  );
};

export default AdminDashboardTemplate;
