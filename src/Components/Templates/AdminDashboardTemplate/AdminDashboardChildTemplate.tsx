import React from "react";
import { Body } from "./style";
import { TopNav } from "Components/Molecules/TopNav";
import usePageTitle from "Hooks/usePageTitle";

// Type defination
interface Props {
  children?: JSX.Element;
  pageTile: string;
}

// Component
const AdminDashboardChildTemplate: React.FC<Props> = ({
  pageTile,
  children,
}) => {
  // Hooks
  usePageTitle(pageTile);
  // Data to display
  return (
    <>
      <TopNav type="admin" pageTitle={pageTile} />
      <Body>{children}</Body>
    </>
  );
};

export default AdminDashboardChildTemplate;
