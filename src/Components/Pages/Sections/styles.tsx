import {
  FlexRowAiCenter,
  FlexRowJcBetweenAiCenter,
  FlexRowJcCenter,
} from "Styles/Abstract/Mixins";
import styled from "styled-components";

export const SectionCardsWrapper = styled.div`
  ${FlexRowJcCenter}
`;
export const SectionCardContainer = styled.div`
  flex-basis: 60rem;
`;

export const SectionCards = styled.div`
  flex-basis: 60rem;
  border-radius: 12px;
  border: 1px solid var(--color-6);
  background-color: var(--color-16);
  padding: 3rem;
`;

export const Card = styled.div`
  box-shadow: var(--shadow-1);
  padding: 1.8rem;
  /* border: 1px solid var(--color-6); */
  border-radius: 0.6rem;
  .top {
    ${FlexRowJcBetweenAiCenter}
    gap: 1rem;
    width: 100%;
  }

  .actions {
    ${FlexRowAiCenter}
    gap: 1rem;
  }

  .bottom {
    padding-top: 1rem;
    padding-bottom: 2rem;
  }

  &:not(:last-child) {
    margin-bottom: 0.6rem;
  }
`;

export const SubSection = styled.div`
  /* box-shadow: var(--shadow-1); */
  padding: 1.5rem;
  padding-block: 0.8rem;
  border: 1px solid var(--color-6);
  border-radius: 0.6rem;
  margin-top: 1rem;
`;