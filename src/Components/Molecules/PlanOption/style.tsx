import styled from "styled-components";
import { FlexRowAiCenter } from "Styles/Abstract/Mixins";

export const Wrapper = styled.div`
  --body-space: 0.3rem;
  border-radius: 7.2rem;
  background-color: var(--color-6);
  padding: var(--body-space);
  ${FlexRowAiCenter}
  position: relative;
  cursor: pointer;

  .plan-option__btn {
    color: var(--color-4);
    font-size: 2rem;
    font-weight: 500;
    padding: 1.2rem 4rem;
    z-index: 1;
  }

  &::before {
    position: absolute;
    content: "";
    height: calc(100% - calc(var(--body-space) * 2));
    width: 50%;
    left: var(--body-space);
    top: var(--body-space);
    border-radius: 7.2rem;
    background-color: var(--color-white);
    transition: 0.4s;
  }

  &.active {
    &::before {
      transform: translateX(calc(100% - calc(var(--body-space) * 2)));
    }
  }
`;
