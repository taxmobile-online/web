import React from "react";

import { Content, Wrapper } from "./style";
import usePageTitle from "Utils/Hooks/usePageTitle";
import Logo from "Components/Atoms/Logo";
import Typography from "Components/Atoms/Typography";
import Input from "Components/Atoms/Input/Input";
import Button from "Components/Atoms/Button";

// Type defination
interface Props {}

// Component
const ResetPassword: React.FC<Props> = () => {
  usePageTitle("Sign in");

  // Data to display
  return (
    <Wrapper>
      <Content>
        <Logo size="lg" />
        <Typography as="h3" className="h-3 mt-10 mb-40" text="Set password" />
        <Input label="Password" type="password" />
        <Input label="Confirm password" type="password" />

        <Button
          className="btn btn-full btn-primary btn-bg-color-2 mt-35"
          value="Save"
        />
      </Content>
    </Wrapper>
  );
};

export default ResetPassword;
