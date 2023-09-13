import styled from "styled-components";
import { FlexRowJcBetweenAiCenter } from "Styles/Abstract/Mixins";
import { motion } from "framer-motion";

export const RightModal = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 50rem;
  overflow: auto;
  background-color: var(--color-white);
  padding-bottom: 7rem;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const RightModalTop = styled.div`
  ${FlexRowJcBetweenAiCenter}
  gap: 1rem;
  background: var(--color-10);
  padding: 4rem;
`;

export const RightModalBody = styled.div`
  padding-top: 4rem;
`;

export const RightModalFormWrapper = styled.div`
  padding-inline: 4rem;
`;

export const CouponAndPrice = styled.div`
  background-color: var(--color-11);
  box-shadow: 0 0.8rem 2.5rem 0 rgba(0, 0, 0, 0.1);
  padding: 4rem;

  .top {
    padding-bottom: 3.5rem;
    ${FlexRowJcBetweenAiCenter}
    gap: 1.8rem;
  }

  .bottom {
    border-top: 1px solid var(--color-6);
    padding-top: 3.5rem;
  }
`;

export const RightModalDown = styled.div`
  padding: 5rem 4rem 0;
`;

export const CenterModal = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
  width: 45rem;
  background-color: var(--color-white);
`;
