import styled from "styled-components";

export const Wrapper = styled.div<{ size?: "small" | "full" }>`
  border-radius: 1.2rem;
  background-color: rgba(255, 178, 73, 0.33);
  padding: 1.5rem;
  margin-top: 3.5rem;
  margin-bottom: 5rem;
  border: 1px solid var(--color-7);
  ${({ size }) => (size === "small" ? `max-width: 40rem;` : "")}
`;

export const SubscriptionRange = styled.p`
  border-radius: 7.2rem;
  background-color: var(--color-7);

  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  color: var(--color-white);
  padding: 0.7rem 1.9rem;
`;
