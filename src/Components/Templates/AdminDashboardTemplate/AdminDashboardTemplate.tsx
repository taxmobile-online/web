import React from "react";
import { Outlet } from "react-router-dom";

import { BodyWrapper, SideNavWrapper, Wrapper } from "./style";

import { SideNav } from "Components/Molecules/SideNav";

// Type defination
interface Props {}

// Component
const AdminDashboardTemplate: React.FC<Props> = () => {
  // Data to display
  return (
    <Wrapper>
      <SideNavWrapper>
        <SideNav />
      </SideNavWrapper>
      <BodyWrapper>
        <Outlet />
      </BodyWrapper>
    </Wrapper>
  );
};

export default AdminDashboardTemplate;
