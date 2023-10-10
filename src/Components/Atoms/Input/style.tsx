import { FlexRowAiCenter } from "Styles/Abstract/Mixins";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  flex-grow: 1;

  .input-label {
    font-size: 1.5rem;
    color: var(--color-9);
    display: inline-block;
    margin-bottom: 0.3rem;
    text-transform: capitalize;
  }

  .input-label--coupon {
    font-size: 1.6rem;
    color: var(--color-9);
    display: inline-block;
    margin-bottom: 0.5rem;
    text-transform: capitalize;
  }

  .input-bottom-label {
    color: var(--color-3);
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 140%;
    display: inline-block;
    margin-top: 0.5rem;
  }

  /* .input {
    &:active,
    &:focus {
      outline: none;
    }
  }

  .input-ele {
    width: 100%;
    border-radius: 1.2rem;
    /* border: 2px solid var(--color-6); */
  /* border: none;
    background: var(--color-white);
    padding: 1.7rem 1.5rem;
  } */

  /* .input-ele--coupon {
    width: 100%;
    border-radius: 7.2rem;
    border: 0.1rem solid var(--color-2);
    padding: 1.7rem 1.5rem;
  } */

  &:not(:last-child) {
    margin-bottom: 3rem;
  }

  &.no-bottom-margin {
    margin-bottom: 0;
  }
`;

export const InputWrapper = styled.div`
  ${FlexRowAiCenter}
  gap: .5rem;
  border-radius: 1.2rem;
  border: 2px solid var(--color-6);
  background-color: var(--color-white);
  padding-right: 1.5rem;
  overflow: hidden;

  &.rounded {
    border-radius: 7.2rem;
  }
  &.normal {
    border-radius: 1.2rem;
  }

  .input {
    border: none;
    &:active,
    &:focus {
      outline: none;
    }
  }

  .input-ele {
    width: 100%;
    padding-block: 1.7rem;
    flex-grow: 1;
    padding-left: 1.5rem;
  }

  .input-ele--coupon {
    width: 100%;
    border: 0.1rem solid var(--color-2);
    padding-block: 1.7rem;
    padding-left: 1.5rem;
    border: none;
  }
`;
