import styled from "styled-components";
import {
  FlexJcEndAiCenter,
  FlexRowJcCenterAiCenter,
} from "Styles/Abstract/Mixins";

export const Wrapper = styled.div``;

export const RightModalDown = styled.div`
  padding: 5rem 4rem 0;
`;

export const FormalModalFooterStyle = styled.div`
  ${FlexJcEndAiCenter}
  gap: 3.5rem;
`;

export const Card = styled.div`
  width: 60rem;
  padding: 3rem;
  border-radius: 1.2rem;
  background: var(--color-white);
  border: 1px solid var(--color-6);
`;

export const OptionsWrapper = styled.section`
  ${FlexRowJcCenterAiCenter}
`;
