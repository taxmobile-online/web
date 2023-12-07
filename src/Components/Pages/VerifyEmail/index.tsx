import React from "react";

import { Wrapper, Body, Content, Nav } from "./style";
import { Center } from "Styles/layouts/Center";
import Logo from "Components/Atoms/Logo";
import Typography from "Components/Atoms/Typography";
import Button from "Components/Atoms/Button";
import { Email } from "Components/Atoms/SvgIcons";
import usePageTitle from "Utils/Hooks/usePageTitle";

// Type defination
interface Props {}

// Component
const VerifyEmail: React.FC<Props> = () => {
  // Hooks
  usePageTitle("Verify email");

  // Data to display
  return (
    <Wrapper>
      <Center>
        <Nav>
          <Logo />
        </Nav>
        <Body>
          <Content>
            <Email />
            <Typography
              as="h2"
              className="h-2 mt-40"
              text="To login, check your email"
            />
            <Typography as="p" className="p-1 mt-20 max-width-450 text-center">
              We sent you a verification link to abcd@gmail.com to validate your
              account.
            </Typography>
            <Typography as="p" className="p-1 mt-60">
              <>
                Didn’t get an email?{" "}
                <Button value="Send it again" className="btn-naked" />
              </>
            </Typography>
          </Content>
        </Body>
      </Center>
    </Wrapper>
  );
};

export default VerifyEmail;
