import {
  FlexJcEndAiCenter,
  FlexRowJcCenterAiCenter,
} from "Styles/Abstract/Mixins";
import styled from "styled-components";

export const Wrapper = styled.div``;

export const RightModalDown = styled.div`
  padding: 5rem 4rem 0;
`;

export const FormalModalFooterStyle = styled.div`
  ${FlexJcEndAiCenter}
  gap: 3.5rem;
`;

export const Card = styled.div`
  border-radius: 1.2rem;
  background: var(--color-white);
  padding: 3rem;
  border: 1px solid var(--color-6);
  width: 60rem;
`;

export const OptionsWrapper = styled.section`
  ${FlexRowJcCenterAiCenter}
`;
