import React from "react";
import { Body, Content, Nav, SubscriptionBox, Wrapper } from "./style";
import { Center } from "Styles/layouts/Center";
import Logo from "Components/Atoms/Logo";
import Typography from "Components/Atoms/Typography";
import { Flex } from "Styles/layouts/Flex";
import Input from "Components/Atoms/Input/Input";
import { Tags } from "Components/Molecules/Tags";
import Button from "Components/Atoms/Button";
import { Link } from "react-router-dom";

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

            <SubscriptionBox>
              <Flex gap="1rem" flexRowJcBetweenAiCenter>
                <Typography as="h6" className="" text="Subscription plan" />
                <Flex gap="1rem" flexRowAiCenter></Flex>
              </Flex>
            </SubscriptionBox>

            <Input label="Email addresses" bottomLabel="Add members by email" />

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
