import styled from 'styled-components';
import { FlexRowAiCenter, FlexRowJcBetweenAiCenter, FlexRowJcCenter } from 'Styles/Abstract/Mixins';

export const Wrapper = styled.div`
  ${FlexRowJcCenter}
`;

export const SectionCardContainer = styled.div`
  flex-basis: 60rem;
`;

export const SectionCardsWrapper = styled.div`
  flex-basis: 60rem;
  border-radius: 12px;
  border: 1px solid var(--color-6);
  background-color: var(--color-16);
  padding: 3rem;
`;

export const CardStyle = styled.div`
  padding: 1.8rem;
  border-radius: 0.6rem;
  box-shadow: var(--shadow-1);
  
  .top {
    gap: 1rem;
    width: 100%;
    ${FlexRowJcBetweenAiCenter}
  }

  .actions {
    gap: 1rem;
    ${FlexRowAiCenter}
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
  padding: 1.5rem;
  padding-block: 0.8rem;
  border-radius: 0.6rem;
  margin-top: 1rem;
  border: 1px solid var(--color-6);
`;