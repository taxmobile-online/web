import styled from "styled-components";
import { FlexColumnJcCenterAiCenter, FlexRowAiCenter } from "Styles/Abstract/Mixins";

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

  .input-error-message {
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 140%;
    display: inline-block;
    color: var(--color-22);
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
    margin-bottom: 2rem;
  }

  &.no-bottom-margin {
    margin-bottom: 0;
  }
`;

export const InputWrapper = styled.div`
  ${FlexRowAiCenter}
  gap: .5rem;
  border-radius: 1.2rem;
  padding-right: 1.5rem;
  border: 2px solid var(--color-6);
  background-color: var(--color-white);
  overflow: hidden;

  &.rounded {
    border-radius: 7.2rem;
  }
  &.normal {
    border-radius: 1.2rem;
  }

  .input {
    border: none;
    font-family: inherit;
    color: var(--color-4);

    &:active,
    &:focus {
      outline: none;
    }
  }

  .input-ele {
    width: 100%;
    flex-grow: 1;
    padding-left: 1.5rem;
    padding-block: 1.7rem;
  }

  .input-ele--coupon {
    width: 100%;
    border: none;
    padding-left: 1.5rem;
    padding-block: 1.7rem;
    border: 0.1rem solid var(--color-2);
  }
`;

export const SelectField = styled.select`
  width: 100%;
  resize: none;
  background-color: var(--color-white);
  border: 1px solid var(--color-17);
  box-shadow: 0 1rem 2.84984rem rgba(0, 0, 0, 0.05);
  border-radius: 1rem;
  padding: 1.5rem 2rem;
  font-family: inherit;

  &:active,
  &:focus {
    outline: none;
    border: 1px solid var(--color-17);
  }
`;

// Custome file two
export const CustomeFileField = styled.div`
  position: relative;
  margin-bottom: 2.2rem;

  .input-label {
    font-size: 1.5rem;
    margin-bottom: 0.3rem;
    color: var(--color-9);
    display: inline-block;
    text-transform: capitalize;
  }

  .custom-input-container {
    ${FlexColumnJcCenterAiCenter};

    padding: 1.7rem 2rem;

    border-radius: 0.4rem;
    border: 1px dashed var(--color-24);
    background-color: var(--color-white);
  }

  .file-name {
    font-weight: 500;
    line-height: 150%;
    font-size: 1.3rem;
    color: var(--color-60);
  }

  .file-input {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    height: 100%;
    width: 100%;
    cursor: pointer;
    position: absolute;
  }

  .bottom-label {
    display: block;

    color: var(--color-1);
    font-size: 1.3rem;
    font-weight: 400;
    line-height: 156.25%;

    margin-top: 1.2rem;
  }
`;