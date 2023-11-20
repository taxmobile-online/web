import styled from "styled-components";
import { FlexColumnJcCenterAiCenter } from "Styles/Abstract/Mixins";

export const Wrapper = styled.div`
  border-radius: 1.2rem;
  border: 1px solid var(--color-6);
  background-color: var(--color-16);
  padding: 2rem;
`;

export const EmptyContent = styled.div`
  ${FlexColumnJcCenterAiCenter};
  gap: 2rem;
  padding-block: 8rem;
`;
