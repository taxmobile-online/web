import React from "react";
import { Wrapper } from "./style";
import { DashboardTemplate } from "Components/Templates/DashboardTemplate";
import { UserProfile } from "Components/Molecules/UserProfile";
import { Card } from "Components/Organisms/Card";
import { UserLogout } from "Components/Molecules/UserLogout";
import { Members } from "Components/Organisms/Members";
import { SubscriptionUpgradeBox } from "Components/Molecules/SubscriptionUpgradeBox";

// Type defination
interface Props {}

// Component
const AdminSettings: React.FC<Props> = () => {
  // Data to display
  return (
    <Wrapper>
      <DashboardTemplate>
        <Card title="Account setting" subTitle="Manage your Taxmobile account.">
          <>
            <UserProfile role="Admin" />
            <Members />

            <SubscriptionUpgradeBox size="small" />
            <UserLogout />
          </>
        </Card>
      </DashboardTemplate>
    </Wrapper>
  );
};

export default AdminSettings;
