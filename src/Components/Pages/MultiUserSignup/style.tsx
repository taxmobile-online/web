import {
  FlexColumnJcCenterAiCenter,
  FlexRowJcCenterAiCenter,
} from "Styles/Abstract/Mixins";
import styled from "styled-components";

export const Wrapper = styled.main`
  ${FlexRowJcCenterAiCenter}
`;

export const Content = styled.main`
  ${FlexColumnJcCenterAiCenter}
  padding-block: 10rem;
  flex-basis: 40rem;
`;
