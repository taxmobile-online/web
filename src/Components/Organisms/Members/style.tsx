import { FlexColumn, FlexRowJcBetweenAiCenter } from "Styles/Abstract/Mixins";
import styled from "styled-components";

export const Wrapper = styled.div``;

export const Head = styled.div`
  border-block: 1px solid var(--color-6);
  padding-block: 1.5rem;
  ${FlexRowJcBetweenAiCenter}
  gap: 1rem;
`;

export const Body = styled.div`
  padding-block: 2.5rem;
  ${FlexColumn}
  gap: 2.1rem;
`;
