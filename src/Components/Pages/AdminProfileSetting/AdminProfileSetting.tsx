import React from "react";
import { Wrapper } from "./style";
import { DashboardTemplate } from "Components/Templates/DashboardTemplate";
import { Card } from "Components/Organisms/Card";
import { UserProfile } from "Components/Molecules/UserProfile";
import { ProfileInfoTemplate } from "Components/Templates/ProfileInfoTemplate";

// Type defination
interface Props {}

// Component
const AdminProfileSetting: React.FC<Props> = () => {
  // Data to display
  return (
    <Wrapper>
      <DashboardTemplate>
        <ProfileInfoTemplate>
          <Card title="Avatar" subTitle="Help people recognize you">
            <>
              <UserProfile type="second" />
            </>
          </Card>
        </ProfileInfoTemplate>
      </DashboardTemplate>
    </Wrapper>
  );
};

export default AdminProfileSetting;
