import styled from "styled-components";
import {
  FlexRowAiCenter,
  FlexRowJcBetweenAiCenter,
  GridCenter,
} from "Styles/Abstract/Mixins";
import { Button } from "Styles/Components/Button";

export const ButtonStyle = styled(Button)`
  &:disabled {
    cursor: not-allowed;
  }
  &.btn {
    /* Search button */
    &-search {
      background-color: var(--color-3);
      border-left: 1px solid var(--color-2);
      ${GridCenter};
    }

    &-back {
      background-color: transparent;
      ${FlexRowAiCenter};
      gap: 1.454rem;
      font-weight: bold;
      font-size: 1.4rem;
      line-height: 1.6rem;
      color: var(--color-black);
      padding: 1rem 0;
    }

    &-cart-width-badge {
      position: relative;

      span {
        position: absolute;
        top: -0.8rem;
        right: -0.8rem;
      }
    }

    &-black-cart {
      ${FlexRowAiCenter};
      gap: 0.6rem;
      width: 100%;
      background-color: var(--color-black);
      color: var(--color-white);
      padding: 2rem 1.7rem;

      div {
        flex-grow: 1;
      }
    }

    &-black-full-cart {
      ${FlexRowJcBetweenAiCenter};
      gap: 0.6rem;
      width: 100%;
      background-color: var(--color-black);
      color: var(--color-white);
      padding: 2rem 1.7rem;

      .title {
        text-align: left;
      }
    }
  }
`;
