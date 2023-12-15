import React from "react";

import { Content, Wrapper } from "./style";
import usePageTitle from "Utils/Hooks/usePageTitle";
import Logo from "Components/Atoms/Logo";
import Typography from "Components/Atoms/Typography";
import { ResetPasswordForm } from "Components/Organisms/Forms";

// Type defination
interface Props {}

// Component
const ResetPassword: React.FC<Props> = () => {
  usePageTitle("Reset password");

  // Data to display
  return (
    <Wrapper>
      <Content>
        <Logo size="lg" />
        <Typography as="h3" className="h-3 mt-10 mb-40" text="Set password" />
        {/* <Input label="Password" type="password" />
        <Input label="Confirm password" type="password" />

        <Button
          className="btn btn-full btn-primary btn-bg-color-2 mt-35"
          value="Save"
        /> */}

        <div className="form-container">
          <ResetPasswordForm />
        </div>
      </Content>
    </Wrapper>
  );
};

export default ResetPassword;
