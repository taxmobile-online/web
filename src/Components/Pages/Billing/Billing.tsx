import React from "react";
import { DashboardTemplate } from "Components/Templates/DashboardTemplate";
import SubscriptionOption from "Components/Organisms/SubscriptionOption";

// Type defination
interface Props {}

// Component
const Billing: React.FC<Props> = () => {
  // Data to display
  return (
    <DashboardTemplate>
      <SubscriptionOption />
    </DashboardTemplate>
  );
};

export default Billing;
