import React from "react";
import { Content, Wrapper } from "./style";
import Logo from "Components/Atoms/Logo";
import Typography from "Components/Atoms/Typography";
import Input from "Components/Atoms/Input/Input";
import Button from "Components/Atoms/Button";

// Type defination
interface Props {}

// Component
const MultiAccountSignup: React.FC<Props> = () => {
  // Data to display
  return (
    <Wrapper>
      <Content>
        <Logo size="lg" />
        <Typography as="h3" className="h-3 mt-10 mb-40" text="Sign up" />
        <Input label="Name" type="text" />
        <Input label="Email" type="email" />
        <Input label="Confirm password" type="password" />

        <Button
          className="btn btn-full btn-primary btn-bg-color-2 mt-35"
          value="Go to library"
        />
      </Content>
    </Wrapper>
  );
};

export default MultiAccountSignup;
