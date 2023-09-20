import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Logo from "Components/Atoms/Logo";
import Button from "Components/Atoms/Button";
import { Center } from "Styles/layouts/Center";
import { ArrowDown, Bell, Logout, Setting } from "Components/Atoms/SvgIcons";
import {
  Container,
  Dropdown,
  NotificationBox,
  NotificationWrapper,
  Right,
  UserAvatar,
  UserCta,
  Wrapper,
} from "./style";
import Typography from "Components/Atoms/Typography";

// Type defination
interface Props {}

// Component
const TopNav: React.FC<Props> = () => {
  // States
  const [showDropdown, setShowDropdown] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  //   Methods
  const handleDropdownShow = () => {
    setShowDropdown(!showDropdown);
  };

  const handleNotificationShow = () => {
    setShowNotification(!showNotification);
  };

  // Data to display
  return (
    <Wrapper>
      <Center>
        <Container>
          <Logo />
          <Right>
            <NotificationWrapper>
              <Button onClick={handleNotificationShow}>
                <Bell />
              </Button>
              <AnimatePresence>
                {showNotification && (
                  <NotificationBox
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 10, opacity: 0 }}
                    transition={{ ease: "easeOut", duration: 0.4 }}
                  >
                    <Typography as="h5" className="h-13 mb-30" text="Notifications" />
                  </NotificationBox>
                )}
              </AnimatePresence>
            </NotificationWrapper>
            <UserCta>
              <Button onClick={handleDropdownShow} className="user-cta">
                <UserAvatar>A</UserAvatar>
                <ArrowDown />
              </Button>
              <AnimatePresence>
                {showDropdown && (
                  <Dropdown
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 10, opacity: 0 }}
                    transition={{ ease: "easeOut", duration: 0.4 }}
                  >
                    <Link to="/#" className="dropdown-item">
                      <Setting />
                      Settings
                    </Link>
                    <Link to="/#" className="dropdown-item">
                      <Logout />
                      Logout
                    </Link>
                  </Dropdown>
                )}
              </AnimatePresence>
            </UserCta>
          </Right>
        </Container>
      </Center>
    </Wrapper>
  );
};

export default TopNav;
