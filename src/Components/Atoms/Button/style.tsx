import styled from "styled-components";
import { Button } from "Styles/Components/Button";

export const ButtonStyle = styled(Button)`
  &:disabled {
    cursor: not-allowed;
  }
  &.btn {
    color: var(--color-white);

    &-normal {
      padding: 1.2rem 3rem;
      border-radius: 3.8rem;
      background-color: var(--color-1);

      font-size: 1.6rem;
      font-weight: 400;
    }

    &-full {
      width: 100%;
      padding: 2rem 4rem;
    }
  }
`;
