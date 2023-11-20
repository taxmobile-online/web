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
