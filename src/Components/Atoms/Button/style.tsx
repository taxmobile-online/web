import { FlexRowAiCenter, GridCenter } from "Styles/Abstract/Mixins";
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

    &-settings {
      border-radius: 3.8rem;
      padding: 1rem 2.4rem;
      font-size: 1.4rem;
    }

    &-setting-with-bg {
      background: var(--color-6);
    }

    &-setting-no-bg {
      ${FlexRowAiCenter}
      gap: 1rem;
      border: 0.1rem solid var(--color-8);
      color: var(--color-2);
      font-weight: 400;
    }

    &-logout-user {
      ${FlexRowAiCenter}
      gap: 1rem;
      color: var(--color-white);
      border-radius: 3.8rem;
      background-color: var(--color-19);
      padding: 0.8rem 2.3rem;

      path {
        fill: var(--color-white);
      }
    }

    &-members {
      ${FlexRowAiCenter}
      gap: 1rem;
      border-radius: 3.8rem;
      background-color: var(--color-primary);
      padding: 0.8rem 2.1rem;
    }

    &-member-trash {
      ${GridCenter}
      border-radius: 50%;
      border: 1px solid rgba(234, 114, 114, 0.6);
      padding: 0.6rem;
    }

    /* Colors */
    &-success {
      background-color: var(--color-17);
    }

    &-bg-color-2 {
      background-color: var(--color-2);

      &:disabled {
        background: var(--color-6);
        color: var(--color-12);
        border: none;
      }
    }

    &-bg-color-18 {
      background-color: var(--color-18);
    }

    &-color-18 {
      color: var(--color-18);
    }

    &-color-primary {
      color: var(--color-primary);
    }

    &-naked {
      color: var(--color-primary);
    }

    /* Size */
    &-full {
      width: 100%;
      padding: 2rem 4rem;
    }

    &-md {
      padding: 0.9rem 2.5rem;
      font-size: 1.3rem;
    }

    &-small,
    &-sm {
      padding: 0.6rem 2.3rem;
      font-size: 1.4rem;
    }
  }
`;
