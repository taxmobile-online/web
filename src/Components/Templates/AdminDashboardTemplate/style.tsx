import { FlexRow } from "Styles/Abstract/Mixins";
import styled from "styled-components";

export const Wrapper = styled.main`
  ${FlexRow}
  background-color: var(--color-14);
`;

export const SideNavWrapper = styled.nav`
  flex-basis: 26.4rem;
  flex-shrink: 0;

  height: 100vh;
`;

export const BodyWrapper = styled.main`
  flex-grow: 1;
`;

export const Body = styled.section`
  padding: 5rem 4rem;
`;
