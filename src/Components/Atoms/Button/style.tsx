import styled from "styled-components";

const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-family: inherit;
  &:active,
  &:focus {
    outline: none;
  }
`;

export const ButtonStyle = styled(Button)`
  &:disabled {
    cursor: not-allowed;
  }
  &.btn {
    color: var(--color-white);
    transition: 0.4s;

    /* Type */
    &-normal {
      padding: 1.2rem 3rem;
      border-radius: 3.8rem;
      background-color: var(--color-1);

      font-size: 1.6rem;
      font-weight: 400;
    }

    &-secondary {
      border-radius: 3.8rem;
      border: 0.1rem solid var(--color-primary);
      color: var(--color-primary);
      font-size: 1.6rem;
      font-weight: 400;
      padding: 1.2rem 4rem;
    }

    &-primary {
      border-radius: 3.8rem;
      border: 0.1rem solid var(--color-primary);
      color: var(--color-white);
      background-color: var(--color-primary);
      font-size: 1.6rem;
      font-weight: 400;
      padding: 1.2rem 4rem;
    }

    &-bg-color-2 {
      background-color: var(--color-2);

      &:disabled {
        background: var(--color-6);
        color: var(--color-12);
        border: none;
      }
    }

    &-naked {
      color: var(--color-primary);
    }

    /* Size */
    &-full {
      width: 100%;
      padding: 2rem 4rem;
    }
  }
`;
