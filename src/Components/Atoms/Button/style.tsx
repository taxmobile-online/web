import styled from "styled-components";
import { Button } from "Styles/Components/Button";

export const ButtonStyle = styled(Button)`
  &:disabled {
    cursor: not-allowed;
  }
  &.btn {
    color: var(--color-white);

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

    /* Size */
    &-full {
      width: 100%;
      padding: 2rem 4rem;
    }
  }
`;
