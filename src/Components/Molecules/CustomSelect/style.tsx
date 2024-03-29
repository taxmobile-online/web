import styled from "styled-components";
import { motion } from "framer-motion";

import { FlexColumn, FlexRowAiCenter } from "Styles/Abstract/Mixins";

export const Wrapper = styled<any>(motion.div)`
  border-radius: 0.5rem;
  /* box-shadow: 0 1rem 7rem 0 rgba(0, 0, 0, 0.5); */
  width: ${({ dropdownwidth }) =>
    dropdownwidth === "full" ? "100%" : "20rem"};
  padding: 1.5rem 2rem;
  position: relative;
  /* background-color: var(--color-3); */
  user-select: none;
  cursor: pointer;

  border-radius: 1.2rem;
  border: 2px solid var(--color-6);
  background-color: var(--color-white);

  margin-bottom: 2rem;
`;

export const Dropdown = styled<any>(motion.div)`
  border-radius: 0.5rem;
  box-shadow: 0 1rem 7rem 0 rgba(0, 0, 0, 0.5);
  width: ${({ dropdownwidth }) =>
    dropdownwidth === "full" ? "100%" : "20rem"};
  padding: 1.5rem 0;
  user-select: none;

  position: absolute;
  left: 0;
  top: 110%;
  /* background-color: var(--color-3); */
  ${FlexColumn}/* gap: .3rem; */
`;

export const DropdownItemWrapper = styled(motion.div)``;

export const DropdownItem = styled(motion.button)`
  padding: 0.6rem 2rem;
  ${FlexRowAiCenter};
  gap: 0.5rem;
  border: none;
  cursor: pointer;
  background-color: transparent;
  transition: 0.4s;
  user-select: none;
  font-family: inherit;

  &:hover {
    background-color: var(--color-2);
  }
`;
