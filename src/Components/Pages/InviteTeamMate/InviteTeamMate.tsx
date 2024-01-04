import React from "react";

import { Body, Content, Nav, Wrapper } from "./style";

import Logo from "Components/Atoms/Logo";
import { Center } from "Styles/layouts/Center";
import Typography from "Components/Atoms/Typography";
import { SubscriptionUpgradeBox } from "Components/Molecules/SubscriptionUpgradeBox";
import InviteTeamMembersForm from "Components/Organisms/Forms/InviteTeamMembersForm";

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

            <InviteTeamMembersForm />
          </Content>
        </Body>
      </Center>
    </Wrapper>
  );
};

export default InviteTeamMate;
