import React from "react";
import { Wrapper } from "./style";
import { DashboardTemplate } from "Components/Templates/DashboardTemplate";
import { Card } from "Components/Organisms/Card";
import { UserProfile } from "Components/Molecules/UserProfile";

// Type defination
interface Props {}

// Component
const AdminProfileSetting: React.FC<Props> = () => {
  // Data to display
  return (
    <Wrapper>
      <DashboardTemplate>
        <Card title="Account setting" subTitle="Manage your Taxmobile account.">
          <>
            <UserProfile role="Admin" />
          </>
        </Card>
      </DashboardTemplate>
    </Wrapper>
  );
};

export default AdminProfileSetting;
