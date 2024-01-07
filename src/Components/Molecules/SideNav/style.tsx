import { FlexColumn } from "Styles/Abstract/Mixins";
import styled from "styled-components";

export const Wrapper = styled.nav`
  border-right: 1px solid var(--color-6);
  background-color: var(--color-white);

  position: sticky;
  top: 0;
  height: 100vh;
  width: 100%;
  padding: 2rem 1rem 2rem 3rem;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const LinksWrapper = styled.nav`
  margin-top: 6rem;
  ${FlexColumn}
  gap: 3.3rem;
`;
