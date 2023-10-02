import React, { useRef, useState } from "react";
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
  Notifications,
  Right,
  UserCta,
  Wrapper,
} from "./style";
import Typography from "Components/Atoms/Typography";
import { Notification } from "Components/Atoms/Notification";
import useOnClickOutside from "Hooks/useOnClickOutside";
import { UserAvatar } from "Components/Atoms/UserAvatar";

// Type defination
interface Props {}

// Component
const TopNav: React.FC<Props> = () => {
  // States
  const [showDropdown, setShowDropdown] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  // Ref
  const dropdownRef = useRef<any>();
  const notificationRef = useRef<any>();

  // Hooks
  useOnClickOutside(dropdownRef, () => setShowDropdown(false));
  useOnClickOutside(notificationRef, () => setShowNotification(false));

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
                    ref={notificationRef}
                  >
                    <Typography
                      as="h5"
                      className="h-13 mb-30"
                      text="Notifications"
                    />

                    <Notifications>
                      <Notification text="With the increasing emphasis on STEM education, there is a growing need for an effective" />
                      <Notification text="With the increasing emphasis on STEM education, there is a growing need for an effective" />
                      <Notification text="With the increasing emphasis on STEM education, there is a growing need for an effective" />
                    </Notifications>
                  </NotificationBox>
                )}
              </AnimatePresence>
            </NotificationWrapper>
            <UserCta>
              <Button onClick={handleDropdownShow} className="user-cta">
                <UserAvatar name="A" />
                <ArrowDown />
              </Button>
              <AnimatePresence>
                {showDropdown && (
                  <Dropdown
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 10, opacity: 0 }}
                    transition={{ ease: "easeOut", duration: 0.4 }}
                    ref={dropdownRef}
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
