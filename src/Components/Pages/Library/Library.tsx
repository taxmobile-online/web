import React from "react";

import { Card } from "Components/Organisms/Card";
import { DashboardTemplate } from "Components/Templates/DashboardTemplate";

// Type defination
interface Props {}

// Component
const Library: React.FC<Props> = () => {
  // Data to display
  return (
    <DashboardTemplate>
      <Card title="Library" subTitle="Manage your Taxmobile account."></Card>
    </DashboardTemplate>
  );
};

export default Library;
