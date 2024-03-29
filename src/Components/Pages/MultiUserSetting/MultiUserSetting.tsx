import React from "react";

import { Card } from "Components/Organisms/Card";
import { DashboardTemplate } from "Components/Templates/DashboardTemplate";
import { UserProfile } from "Components/Molecules/UserProfile";
import { UserLogout } from "Components/Molecules/UserLogout";

// Type defination
interface Props {}

// Component
const MultiUserSetting: React.FC<Props> = () => {
  // Data to display
  return (
    <DashboardTemplate>
      <Card title="Account setting" subTitle="Manage your Taxmobile account.">
        <>
          <UserProfile name="Adeyemi Qudus" />
          <UserLogout />
        </>
      </Card>
    </DashboardTemplate>
  );
};

export default MultiUserSetting;
