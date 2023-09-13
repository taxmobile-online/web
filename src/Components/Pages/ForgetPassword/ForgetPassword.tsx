import React from "react";
import { Content, Wrapper } from "./style";
import Logo from "Components/Atoms/Logo";
import Typography from "Components/Atoms/Typography";
import Input from "Components/Atoms/Input/Input";
import Button from "Components/Atoms/Button";

// Type defination
interface Props {}

// Component
const ForgetPassword: React.FC<Props> = () => {
  // Data to display
  return (
    <Wrapper>
      <Content>
        <Logo size="lg" />
        <Typography as="h4" className="" text="Forgot your password?" />
        <Typography as="p" className="text-center max-width-510 mb-50 mt-10">
          Enter the email address associated with your Taxmobile account and
          we'll send you a link to reset your password.
        </Typography>

        <div className="small-width-box">
          <Input label="Email" />
          <Button
            className="btn btn-primary btn-full btn-bg-color-2 mt-40"
            value="Sign in"
          />
          <Typography as="p" className="p-1 mt-40 text-center">
            <>
              Back to? <Button> Sign in</Button>
            </>
          </Typography>
        </div>
      </Content>
    </Wrapper>
  );
};

export default ForgetPassword;
