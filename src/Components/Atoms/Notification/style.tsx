import styled from "styled-components";

export const Wrapper = styled.div`
  padding-block: 1.7rem;
  &:not(:first-child) {
    border-top: 1px solid var(--color-15);
  }

  .new {
    border-radius: 7.2rem;
    background-color: var(--color-primary);
    display: inline-block;
    font-size: 1rem;
    font-weight: 400;
    color: var(--color-white);
    padding: 0.08rem 0.7rem;
    margin-bottom: 1rem;
  }
`;
