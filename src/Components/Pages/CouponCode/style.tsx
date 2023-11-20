import { FlexRowJcBetweenAiCenter } from "Styles/Abstract/Mixins";
import styled from "styled-components";

export const Wrapper = styled.section``;

export const Top = styled.div`
  ${FlexRowJcBetweenAiCenter}
  gap: 1rem;
`;

export const Card = styled.div`
  border-radius: 1.2rem;
  border: 1px solid var(--color-6);
  background: var(--color-16);
  padding: 1rem;

  table {
    width: 100%;
    border-collapse: collapse;
  }

  th,
  td {
    text-align: left;
    padding: 1.5rem;
  }

  th {
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 137.5%;
    color: var(--color-4);
    background-color: var(--color-11);

    &.center {
      text-align: center;
    }
  }

  td {
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 135.714%;
    color: var(--color-8);

    &.center {
      text-align: center;
    }
  }
`;
