import { css } from "styled-components";

export const Typography = css`
  body {
    font-family: "Ubuntu", sans-serif;
    font-size: 1.6rem;
    line-height: 1.7rem;
    font-weight: 500;
  }

  /* Headings */
  .heading {
    &-1 {
      font-size: 1.8rem;
      line-height: 2.1rem;
      color: var(--color-black);
    }
    &-2 {
      font-weight: bold;
      font-size: 1.4rem;
      line-height: 1.6rem;
      color: var(--color-black);
    }
    &-3 {
      font-weight: bold;
      font-size: 1.8rem;
      line-height: 2.1rem;
      color: var(--color-white);
    }
    &-4 {
      font-weight: bold;
      font-size: 1.2rem;
      line-height: 1.5rem;
      color: var(--color-white);
    }
    &-5 {
      font-weight: bold;
      font-size: clamp(2.5rem, 5vw, 3.6rem);
      line-height: clamp(3.4rem, 5vw, 4.1rem);
      letter-spacing: -1px;
      color: var(--color-black);
    }
    &-6 {
      font-weight: bold;
      font-size: 1.4rem;
      line-height: 1.5rem;
      color: var(--color-black);
    }
    &-7 {
      font-weight: 300;
      font-size: 3.6rem;
      line-height: 4.1rem;
      color: var(--color-black);
    }
    &-8 {
      font-weight: bold;
      font-size: 1.4rem;
      line-height: 1.6rem;
      color: var(--color-white);
    }
    &-9 {
      font-weight: 300;
      font-size: 2.8rem;
      line-height: 3.2rem;
      color: var(--color-white);
    }
  }

  /* Paragraphs */
  .paragraph {
    &-1 {
      font-size: 1.2rem;
      line-height: 1.4rem;
      color: var(--color-6);
    }
    &-2 {
      font-size: 1.2rem;
      line-height: 1.5rem;
      color: var(--color-black);
    }
    &-3 {
      font-size: 1.2rem;
      line-height: 1.5rem;
      color: var(--color-4);
    }
    &-4 {
      font-size: 1.4rem;
      line-height: 1.5rem;
      color: var(--color-black);
    }
    &-5 {
      font-size: 1.2rem;
      line-height: 1.4rem;
      color: var(--color-black);
    }
    &-6 {
      font-size: 1.4rem;
      line-height: 1.6rem;
      color: var(--color-black);
    }
    &-7 {
      font-size: 1.4rem;
      line-height: 2.1rem;
      color: var(--color-black);
    }
  }

  .stock-text {
    color: var(--color-4);
  }
  .no-stock-text {
    color: var(--color-8);
  }

  .link {
    &-default {
      text-decoration: none;
    }
  }
`;
