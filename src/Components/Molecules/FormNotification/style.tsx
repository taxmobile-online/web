import styled from "styled-components";
import { motion } from "framer-motion";

import { FlexRowAiCenter } from "Styles/Abstract/Mixins";

export const Wrapper = styled(motion.div)`
  ${FlexRowAiCenter}
  border-radius: 1.2rem;
  padding: 1.4rem 2rem;
  gap: 1.2rem;
  max-width: 57.8rem;
  background-color: var(--color-13);

  &.error {
    background-color: var(--color-22);
  }
`;
