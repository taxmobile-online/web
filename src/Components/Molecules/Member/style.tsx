import styled from "styled-components";
import { FlexRowAiCenter } from "Styles/Abstract/Mixins";

export const Wrapper = styled.div`
  ${FlexRowAiCenter}
  gap: 1rem;
`;

export const Name = styled.div`
  /* flex-grow: 1; */
  flex-basis: 40rem;
  ${FlexRowAiCenter}
  gap: 1rem;
  /* background-color: red; */
`;
export const Email = styled.div`
  /* flex-grow: 1; */
  flex-basis: 40rem;
  /* background-color: blue; */
`;
export const Action = styled.div`
  /* background-color: green; */
  margin-left: auto;
`;
