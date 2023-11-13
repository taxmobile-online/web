import {
  FlexRowAiCenter,
  FlexRowJcBetweenAiCenter,
} from "Styles/Abstract/Mixins";
import styled from "styled-components";

export const Wrapper = styled.div`
  border-radius: 0.4rem;
  border: 1px solid var(--color-6);
  background-color: var(--color-white);
  padding: 2.5rem;
`;

export const Top = styled.div`
  ${FlexRowJcBetweenAiCenter}
  gap: 1rem;
`;

export const TopLeft = styled.div`
  ${FlexRowAiCenter}
  gap: 6rem;
`;

export const Legends = styled.div`
  ${FlexRowAiCenter}
  gap: 3.5rem;

  .legend {
    font-size: 1.45rem;
    font-weight: 400;
    color: var(--color-9);
    position: relative;
    ${FlexRowAiCenter}
    gap: 1rem;
    padding-left: 1.9rem;

    &::before {
      position: absolute;
      content: "";
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
      left: 0;
    }

    &--sales {
      &::before {
        background-color: var(--color-primary);
      }
    }
    &--subscribers {
      &::before {
        background-color: var(--color-7);
      }
    }
  }
`;

export const Bottom = styled.div``;
