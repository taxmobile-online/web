import styled from "styled-components";
import { FlexColumnJcCenterAiCenter, GridCenter } from "Styles/Abstract/Mixins";

export const Wrapper = styled.main``;

export const Nav = styled.nav`
  padding: 3rem 4rem;
`;

export const Body = styled.section`
  ${GridCenter}
`;

export const Content = styled.div`
  ${FlexColumnJcCenterAiCenter}
  padding-block: 7rem;
`;
