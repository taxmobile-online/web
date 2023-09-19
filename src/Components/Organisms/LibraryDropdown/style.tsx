import { FlexColumn, FlexRowAiCenter } from "Styles/Abstract/Mixins";
import styled from "styled-components";

export const Wrapper = styled.div`
  ${FlexColumn}
  gap: 3rem;

  .toggler-btn {
    font-size: 1.7rem;
    font-weight: 500;
    color: var(--color-8);

    ${FlexRowAiCenter}
    gap: 1rem;
  }
`;

export const BookStyle = styled.div`
  padding-block: 2rem;
  background-color: var(--color-white);
  border-bottom: 1px solid var(--color-6);

  &:not(:first-child) {
    border-top: 1px solid var(--color-6);
  }

  .book-btn {
    font-size: 1.3rem;
  }
`;

export const Books = styled.div`
  ${FlexColumn}
  gap: 1rem;
`;
