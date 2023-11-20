import {
  FlexRowAiCenter,
  FlexRowJcBetweenAiCenter,
  FlexRowJcCenterAiCenter,
  GridCenter,
} from "Styles/Abstract/Mixins";
import styled from "styled-components";

export const SubscribersCard = styled.section`
  border-radius: 1.2rem;
  border: 1px solid var(--color-6);
  /* background-color: var(--color-6); */
  padding: 2rem;
`;

export const CardTop = styled.div`
  ${FlexRowJcBetweenAiCenter}
  gap: 1rem;
`;

export const SearchInput = styled.div`
  ${FlexRowAiCenter}
  flex-basis: 29rem;

  input {
    font-size: 1.4rem;
    font-weight: 400;
    color: var(--color-4);
    padding-block: 1rem;
    padding-left: 1rem;
    flex-grow: 1;
    font-family: inherit;
    border: none;
    background-color: transparent;

    &::placeholder {
      font-size: 1.4rem;
      font-weight: 400;
      color: var(--color-4);
    }

    &:active,
    &:focus {
      outline: none;
    }
  }
`;

export const TableSection = styled.div`
  padding-block: 3rem;

  table {
    width: 100%;
    border-collapse: collapse;
  }

  th,
  td {
    text-align: left;
  }

  th {
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 137.5%;
    color: var(--color-4);
    background-color: var(--color-11);

    padding: 0.9rem;
    padding-block: 1.5rem;
  }

  td {
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 135.714%;
    color: var(--color-8);

    padding: 0.9rem;
  }
`;

export const Name = styled.div`
  ${FlexRowAiCenter}
  gap: 1rem;
`;

export const NameAvatar = styled.div`
  width: 4rem;
  height: 4rem;
  flex-shrink: 0;
  border-radius: 50%;
  ${GridCenter}
  background-color: var(--color-primary);

  color: var(--color-white);
  font-size: 1%.7rem;
  font-weight: 500;
`;

export const Pagination = styled.div`
  ${FlexRowJcCenterAiCenter}
  gap: 1rem;
`;
