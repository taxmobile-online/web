import React, { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "Components/Atoms/Logo";
import Button from "Components/Atoms/Button";
import { Center } from "Styles/layouts/Center";
import {
  Container,
  Dropdown,
  Right,
  UserAvatar,
  UserCta,
  Wrapper,
} from "./style";
import { ArrowDown, Bell, Logout, Setting } from "Components/Atoms/SvgIcons";
import { AnimatePresence } from "framer-motion";

// Type defination
interface Props {}

// Component
const TopNav: React.FC<Props> = () => {
  // States
  const [showDropdown, setShowDropdown] = useState(false);

  //   Methods
  const handleDropdownShow = () => {
    setShowDropdown(!showDropdown);
  };

  // Data to display
  return (
    <Wrapper>
      <Center>
        <Container>
          <Logo />
          <Right>
            <Bell />
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
