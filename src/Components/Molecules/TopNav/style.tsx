import styled from "styled-components";
import { motion } from "framer-motion";

import {
  FlexColumn,
  FlexRowAiCenter,
  FlexRowJcBetweenAiCenter,
} from "Styles/Abstract/Mixins";
import { Center } from "Styles/layouts/Center";

export const Wrapper = styled.nav<{ $type?: "admin" | "user" }>`
  background-color: ${({ $type }) =>
    $type === "admin" ? "var(--color-11)" : "var(--color-white)"};

  ${({ $type }) => ($type === "admin" ? "padding-block: 3rem" : "")};

  /* background-color: var(--color-white); */
  box-shadow: 0 0.7rem 1rem rgba(0, 0, 0, 0.03);
  box-shadow: ${({ $type }) =>
    $type === "admin" ? "none" : "0 0.7rem 1rem rgba(0, 0, 0, 0.03)"};
  position: sticky;
  top: 0;
  z-index: 1;
`;

export const Container = styled(Center)`
  ${FlexRowJcBetweenAiCenter}
`;

export const Right = styled.div`
  ${FlexRowJcBetweenAiCenter}
  gap: 5rem;
`;

export const NotificationWrapper = styled.div`
  position: relative;
`;

export const NotificationBox = styled(motion.div)`
  position: absolute;
  top: 150%;
  right: 0;
  padding: 2rem;
  width: 35rem;
  border-radius: 1.2rem;
  background-color: var(--color-white);
  box-shadow: 0 0.8rem 2.5rem 0 rgba(0, 0, 0, 0.12);
`;

export const Notifications = styled.div``;

export const UserCta = styled.div`
  position: relative;

  .user-cta {
    ${FlexRowAiCenter}
    gap: 1rem;
  }
`;

export const Dropdown = styled(motion.div)`
  ${FlexColumn}
  gap: 2.8rem;
  border-radius: 1.2rem;
  background-color: var(--color-white);
  box-shadow: 0 0.8rem 2.5rem 0 rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 150%;
  right: 0;
  width: 20rem;
  padding: 2rem;
  cursor: inherit;

  .dropdown-item {
    ${FlexRowAiCenter}
    gap: 1.2rem;
    color: var(--color-8);
    font-size: 1.6rem;
    font-weight: 400;
    text-decoration: none;
    transition: 0.4s;

    &:hover {
      color: var(--color-3);
    }
  }
`;
