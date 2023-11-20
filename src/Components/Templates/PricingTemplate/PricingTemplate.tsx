import React from "react";
import { AdminDashboardChildTemplate } from "../AdminDashboardTemplate";
import { Outlet } from "react-router-dom";

// Type defination
interface Props {}

// Component
const PricingTemplate: React.FC<Props> = () => {
  // Data to display
  return (
    <AdminDashboardChildTemplate pageTile="Pricing">
      <Outlet />
    </AdminDashboardChildTemplate>
  );
};

export default PricingTemplate;
