import React from "react";
import { FormWrapper } from "./style";
import { DashboardTemplate } from "Components/Templates/DashboardTemplate";
import { Card } from "Components/Organisms/Card";
import { UserProfile } from "Components/Molecules/UserProfile";
import { ProfileInfoTemplate } from "Components/Templates/ProfileInfoTemplate";
import { Input } from "Components/Atoms/Input";
import Button from "Components/Atoms/Button";

// Type defination
interface Props {}

// Component
const AdminProfileSetting: React.FC<Props> = () => {
  // Data to display
  return (
    <DashboardTemplate>
      <ProfileInfoTemplate>
        <>
          <Card
            title="Avatar"
            subTitle="Help people recognize you"
            className="mb-25 with-border"
          >
            <>
              <UserProfile type="second" />
            </>
          </Card>
          <Card title="Personal info" className="with-border" tittleLight>
            <FormWrapper>
              <Input label="Full Name" />
              <Input label="Email" />
              <Input label="Phone Number" />

              <Button
                className="btn btn-primary btn-bg-color-2"
                value="Save changes"
                disabled
              />
            </FormWrapper>
          </Card>
        </>
      </ProfileInfoTemplate>
    </DashboardTemplate>
  );
};

export default AdminProfileSetting;
