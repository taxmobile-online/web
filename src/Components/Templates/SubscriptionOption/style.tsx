import styled from "styled-components";
import {
  FlexColumnJcCenterAiCenter,
  FlexRowAiCenter,
  FlexRow,
} from "Styles/Abstract/Mixins";

import { Center } from "Styles/layouts/Center";

export const Wrapper = styled.main`
  padding-block: 10rem;
`;

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

export const PlanOptionWrapper = styled.div`
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

export const PlansWrapper = styled.div`
  ${FlexRow}
  gap: 4rem;
`;

export const PlanCard = styled.div`
  border-radius: 1.2rem;
  ${FlexColumnJcCenterAiCenter}
  padding: 4rem 1.5rem;
  width: 36rem;

  &.secondary {
    border: 0.1rem solid var(--color-6);
    background-color: var(--color-white);
  }

  &.primary {
    border: 0.1rem solid var(--color-7);
    background-color: var(--color-7);
  }
`;

export const SubscriberQuantity = styled.div`
  border-radius: 7.2rem;
  background-color: var(--color-10);
  padding: 1.3rem 3rem;
  margin-top: 2.5rem;
`;
