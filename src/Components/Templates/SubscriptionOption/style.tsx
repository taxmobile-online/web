import styled from "styled-components";
import {
  FlexColumnJcCenterAiCenter,
  FlexRowAiCenter,
  FlexRow,
} from "Styles/Abstract/Mixins";

import { Center } from "Styles/layouts/Center";

export const Wrapper = styled.main``;
export const Container = styled(Center)`
  ${FlexColumnJcCenterAiCenter}
`;

export const PriceSwitchStyle = styled.div`
  ${FlexRowAiCenter}
  gap: 3rem;
`;

export const Switch = styled.div`
  width: 4.8rem;
  padding: 0.5rem;
  background-color: var(--color-2);
  border-radius: 3rem;
  ${FlexRow}
  cursor: pointer;
  transition: 0.4s;
`;

export const SwitchToggle = styled.div`
  --size: 1.5rem;
  width: var(--size);
  height: var(--size);
  background-color: var(--color-white);
  border-radius: 50%;
  transition: 0.4s cubic-bezier(0.55, 0.09, 0.68, 0.53);

  &.mvv {
    transform: translateX(calc(100% + calc(var(--size) / 2)));
  }
`;
