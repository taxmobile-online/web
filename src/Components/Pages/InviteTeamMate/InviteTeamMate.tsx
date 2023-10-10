import React from "react";

import { Body, Content, Nav, Wrapper } from "./style";

import { Link } from "react-router-dom";
import Logo from "Components/Atoms/Logo";
import { Flex } from "Styles/layouts/Flex";
import Button from "Components/Atoms/Button";
import { Center } from "Styles/layouts/Center";
import Input from "Components/Atoms/Input/Input";
import Typography from "Components/Atoms/Typography";
import { SubscriptionUpgradeBox } from "Components/Molecules/SubscriptionUpgradeBox";
import { AppTagInput } from "Components/Atoms/Input";

// Type defination
interface Props {}

// Component
const InviteTeamMate: React.FC<Props> = () => {
  // Data to display
  return (
    <Wrapper>
      <Center>
        <Nav>
          <Logo />
        </Nav>
        <Body>
          <Content>
            <Typography
              as="h2"
              className="h-2 mt-40"
              text="Invite your teammates"
            />
            <Typography as="p" className="p-1">
              Build your team to collaborate on taxmobile.
            </Typography>

            <SubscriptionUpgradeBox />

            <AppTagInput
              label="Email Addresses"
              bottomLabel="Add members by email"
            />

            <Flex gap="3rem" className="mt-70" flexRowAiCenter>
              <Button
                className="btn btn-primary btn-bg-color-2"
                value="Invite and continue"
              />
              <Link to="/sign-in">Skip</Link>
            </Flex>
          </Content>
        </Body>
      </Center>
    </Wrapper>
  );
};

export default InviteTeamMate;
