import React from "react";
import { DashboardTemplate } from "Components/Templates/DashboardTemplate";
import { Card } from "Components/Organisms/Card";
import { UserProfile } from "Components/Molecules/UserProfile";
import { UserLogout } from "Components/Molecules/UserLogout";
import { SubscriptionUpgradeBox } from "Components/Molecules/SubscriptionUpgradeBox";

// Type defination
interface Props {}

// Component
const IndividualUserSettings: React.FC<Props> = () => {
  // Data to display
  return (
    <DashboardTemplate>
      <Card title="Account setting" subTitle="Manage your Taxmobile account.">
        <>
          <UserProfile name="Adeyemi Qudus" />
          <SubscriptionUpgradeBox size="small" />

          <UserLogout />
        </>
      </Card>
    </DashboardTemplate>
  );
};

export default IndividualUserSettings;
