import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { Center } from "Styles/layouts/Center";
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

import Logo from "Components/Atoms/Logo";
import Button from "Components/Atoms/Button";
import Typography from "Components/Atoms/Typography";
import { UserAvatar } from "Components/Atoms/UserAvatar";
import { Notification } from "Components/Atoms/Notification";
import { ArrowDown, Bell, Logout, Setting } from "Components/Atoms/SvgIcons";

import useAuthStore from "Store/auth.store";
import useOnClickOutside from "Utils/Hooks/useOnClickOutside";

// Type defination
interface Props {
  type?: "admin" | "user";
  pageTitle?: string;
}

// Component
const TopNav: React.FC<Props> = (props) => {
  // States
  const [showDropdown, setShowDropdown] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  // Props
  const { type, pageTitle } = props;

  // Store
  const { setUserData, userData } = useAuthStore();

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

  // Component local variables
  const settingsUrl =
    userData.accountType === "PERSONAL"
      ? "/individual-user-settings"
      : "/admin-account-settings";

  // Data to display
  return (
    <Wrapper $type={type}>
      <Center>
        <Container>
          {type === "admin" ? (
            <Typography as="h3" className="h-29" text={pageTitle} />
          ) : (
            <Logo />
          )}
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
                    <Link to={settingsUrl} className="dropdown-item">
                      <Setting />
                      Settings
                    </Link>
                    <Link
                      to="/#"
                      className="dropdown-item"
                      onClick={() => setUserData({})}
                    >
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
