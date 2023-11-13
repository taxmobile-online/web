import { FlexColumnJcCenterAiCenter } from "Styles/Abstract/Mixins";
import styled from "styled-components";

export const Wrapper = styled.section`
  ${FlexColumnJcCenterAiCenter}
  padding-inline: 2rem;
`;

export const Container = styled.div`
  border-radius: 1.2rem;
  background-color: var(--color-white);
  padding: 10rem 5rem;
  ${FlexColumnJcCenterAiCenter}
  /* flex-basis: 80rem; */
  margin-inline: auto;
  box-shadow: var(--shadow-1);
`;
