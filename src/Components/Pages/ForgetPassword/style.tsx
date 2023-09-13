import {
  FlexColumnJcCenterAiCenter,
  FlexRowJcCenterAiCenter,
  GridCenter,
} from "Styles/Abstract/Mixins";
import { motion } from "framer-motion";
import styled from "styled-components";

export const Wrapper = styled.main`
  ${GridCenter}
`;

export const Content = styled.main`
  ${FlexColumnJcCenterAiCenter}
  padding-block: 9rem;
`;

export const Success = styled(motion.div)`
  ${FlexRowJcCenterAiCenter}
  gap: 1rem;
  border-radius: 1.2rem;
  background-color: var(--color-13);
  padding: 1.2rem 2.2rem;
  width: 100%;
  margin-bottom: 3rem;
`;
