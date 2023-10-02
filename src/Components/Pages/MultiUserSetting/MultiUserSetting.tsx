import React from "react";

import { Card } from "Components/Organisms/Card";
import { DashboardTemplate } from "Components/Templates/DashboardTemplate";
import { UserAvatar } from "Components/Atoms/UserAvatar";

// Type defination
interface Props {}

// Component
const MultiUserSetting: React.FC<Props> = () => {
  // Data to display
  return (
    <DashboardTemplate>
      <Card title="Account setting" subTitle="Manage your Taxmobile account.">
        <UserAvatar name="S" size="big" />
      </Card>
    </DashboardTemplate>
  );
};

export default MultiUserSetting;
