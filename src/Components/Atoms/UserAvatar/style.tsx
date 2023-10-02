import styled from "styled-components";
import { GridCenter } from "Styles/Abstract/Mixins";

export const Wrapper = styled.div`
  ${GridCenter}
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: var(--color-primary);
  color: var(--color-white);
  color: var(--color-white);
  font-weight: 500;
  text-transform: uppercase;

  &.small {
    width: 4rem;
    height: 4rem;
    font-size: 1.8rem;
  }

  &.big {
    width: 10rem;
    height: 10rem;
    font-size: 4rem;
  }
`;
