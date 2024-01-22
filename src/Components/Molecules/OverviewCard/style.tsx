import styled from "styled-components";
import { FlexColumn, FlexRowAiCenter } from "Styles/Abstract/Mixins";

export const Wrapper = styled.div`
  border-radius: 0.4rem;
  border: 1px solid var(--color-6);
  background: var(--color-white);
  padding: 1.5rem;

  ${FlexColumn}/* width: 25.5rem;
  margin: 7rem; */
`;

export const Top = styled.div`
  ${FlexRowAiCenter}
  gap: 1rem;

  margin-bottom: auto;
`;
