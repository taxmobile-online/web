import styled from "styled-components";
import { motion } from "framer-motion";

import { Rotate } from "Styles/Base/Animation";

export const FaSpinnerStyle = styled(motion.div)`
  text-align: center;
  /* padding-top: 5rem;
  padding-bottom: 5rem; */

  i {
    animation: ${Rotate} 0.8s infinite;
    animation-fill-mode: forwards;
    animation-timing-function: linear;
    transform-origin: center center;

    font-size: 1.3rem;
    color: var(--color-white);
    color: var(--color-2);
  }
`;
export const SpinnerStyle = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: 0.1rem solid var(--color-23);
  border-left-color: var(--color-primary);

  animation: ${Rotate} 0.8s infinite;
  animation-fill-mode: forwards;
  animation-timing-function: linear;
  transform-origin: center center;
`;
