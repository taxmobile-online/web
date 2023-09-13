import styled from "styled-components";
import { FlexRowJcCenter } from "Styles/Abstract/Mixins";

export const Wrapper = styled.main``;

export const Nav = styled.nav`
  padding: 3rem 4rem;
`;

export const Body = styled.section`
  ${FlexRowJcCenter}
`;

export const Content = styled.div`
  /* padding-block: 3rem; */
  flex-basis: 45rem;
`;

export const SubscriptionBox = styled.div`
  border-radius: 1.2rem;
  border: 0.1rem solid var(--color-7);
  background-color: rgba(255, 178, 73, 0.33);
  padding: 1.5rem;
  margin-top: 3.5rem;
  margin-bottom: 5rem;
`;
