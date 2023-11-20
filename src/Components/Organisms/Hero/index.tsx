import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";

import Logo from "Components/Atoms/Logo";
import { Flex } from "Styles/layouts/Flex";
import Button from "Components/Atoms/Button";
import Typography from "Components/Atoms/Typography";
import HeroListItem from "Components/Molecules/HeroListItem";

import { HeroStyle, Left, LeftInner, Right } from "./style";
import { RightModal } from "Components/Molecules/Modals";
// import { useNavigate } from "react-router-dom";

const lists = [
  "Articles and Books From Industry Experts",
  "FIRS & SIRSCirculars as far back as 1993",
  "Tax Laws in Nigeria",
  "International Tax Materials",
  "Court Rulings & Taxmobile Analysis",
  "Case Study Analysis",
  "Transfer Pricing and more",
];

interface Props {}
const Hero: React.FC<Props> = () => {
  // State
  const [show, setShow] = useState(false);

  // Hooks
  // const nagivate = useNavigate();

  // // Method
  // const handleShowModal = () => {
  //   setShow(!show);
  // };

  const handleCloseModal = () => {
    setShow(false);
  };

  // Data to display
  return (
    <>
      <HeroStyle>
        <Left>
          <LeftInner>
            <Logo />
            <Typography as="h1" className="h-1 mt-50">
              <>
                <span className="color-primary">Learn</span> With
                Taxmobile.Online Virtual Library
              </>
            </Typography>
            <Typography as="h3" className="h-3 mt-10">
              Join our resourceful tax library on a monthly/yearly subscription
              and get access to:
            </Typography>

            <Flex gap="1rem" className="mt-50" flexColumn>
              {lists.map((list, index) => (
                <HeroListItem key={index} item={list} />
              ))}
            </Flex>

            <Flex gap="3rem" className="mt-50" flexRowAiCenter>
              <a href="#sub-option">
                <Button
                  // onClick={handleShowModal}
                  // onClick={() => nagivate("/#sub-option")}
                  className="btn btn-normal"
                  value="Sign up"
                />
              </a>
              <Typography as="h5" className="h-5">
                <>
                  Already have an account?{" "}
                  <span className="color-5">Sign in</span>
                </>
              </Typography>
            </Flex>
          </LeftInner>
        </Left>
        <Right>
          <img
            src="/assets/images/hero-placeholder.png"
            alt="header-her"
            className="hero-image"
          />
        </Right>
      </HeroStyle>

      <AnimatePresence>
        {show && <RightModal closeModal={handleCloseModal} />}
      </AnimatePresence>
    </>
  );
};

export default Hero;
