import styled from "styled-components";
import { motion } from "framer-motion";
import { Rotate } from "Styles/Base/Animation";

export const SpinnerStyle = styled(motion.div)`
  text-align: center;
  padding-top: 5rem;
  padding-bottom: 5rem;
  i {
    animation: ${Rotate} 1s infinite;
    animation-fill-mode: forwards;
    animation-timing-function: linear;
    transform-origin: center center;

    font-size: 3rem;
    color: var(--color-10);
  }
`;
