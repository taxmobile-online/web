import {
  FlexColumn,
  FlexJcEndAiCenter,
  FlexRowAiCenter,
  FlexRowJcBetweenAiCenter,
  FlexRowJcCenterAiCenter,
  GridCenter,
} from "Styles/Abstract/Mixins";
import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 70rem;
  margin-inline: auto;
`;

export const Top = styled.div`
  ${FlexJcEndAiCenter}
`;

export const BooksWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 18rem), 1fr));
  grid-gap: 3rem;

  border-radius: 1.2rem;
  border: 1px solid var(--color-6);
  background-color: var(--color-16);
  padding: 2rem;
`;

export const BookStyle = styled.div`
  background-color: var(--color-white);
  border-radius: 1rem;
  overflow: hidden;

  .book__top {
    background-color: var(--color-primary);
    ${GridCenter};
    height: 10rem;
    border-radius: 1rem;
  }

  .book__bottom {
    padding-block: 1rem;
  }

  .book-btn {
    font-size: 1.1rem;
    font-weight: 500;
  }
`;

export const Actions = styled.div`
  ${FlexRowAiCenter}
  gap: 1rem;
`;

export const Books = styled.div`
  ${FlexColumn}
  gap: 1rem;
`;

export const Circulars = styled.div`
  ${FlexColumn}
  gap: 1rem;

  .circular-toggle-style {
    border-radius: 1.2rem;
    background-color: var(--color-11);
    padding: 1rem 2rem;
    ${FlexRowJcBetweenAiCenter}
  }
`;

export const CircularToggleStyle = styled.div``;


