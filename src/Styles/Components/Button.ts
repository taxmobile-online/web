import styled from "styled-components";
import { motion } from "framer-motion";

// General Button style
export const Button = styled(motion.button)`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-family: inherit;
  &:active,
  &:focus {
    outline: none;
  }
`;
