import {
  FlexColumnJcCenterAiCenter,
  FlexJcEndAiCenter,
} from "Styles/Abstract/Mixins";
import styled from "styled-components";

export const Wrapper = styled.section`
  ${FlexColumnJcCenterAiCenter}
`;

export const Card = styled.section`
  border-radius: 1.2rem;
  background: var(--color-white);
  padding: 3rem;
  border: 1px solid var(--color-6);
  width: 60rem;
`;

export const Actions = styled.div`
  ${FlexJcEndAiCenter}
  gap: 1.5rem;
`;
