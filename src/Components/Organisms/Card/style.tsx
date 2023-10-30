import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 3rem 4rem 3rem;
  border-radius: 1.2rem;
  background-color: var(--color-16);
  /* background-color: #0000ff54; */
  box-shadow: 0 0 2rem rgba(0, 0, 0, 0.03);

  &.with-border {
    border: 1px solid var(--color-6);
  }
`;

export const Top = styled.div`
  border-bottom: 1px solid var(--color-15);
  padding-bottom: 1rem;
`;

export const Bottom = styled.div`
  padding-block: 3rem;
`;
