import { css } from "styled-components";

export const Typography = css`
  body {
    font-family: "Work Sans", sans-serif;
    font-size: 1.6rem;
    line-height: 1.7rem;
    font-weight: 500;
  }

  /* Headings */
  .h {
    &-1 {
      font-size: 4rem;
      font-weight: 700;
      line-height: 7.2rem;
      color: var(--color-1);
    }
    &-2 {
      font-size: 3.6rem;
      font-weight: 700;
      line-height: 5.6rem;
      color: var(--color-1);
    }
    &-3 {
      font-size: 2rem;
      font-weight: 500;
      line-height: 2.75rem;
      color: var(--color-3);
    }
    &-4 {
      font-size: 2.6rem;
      font-weight: 500;
      line-height: 4.25rem;
      color: var(--color-4);
    }
    &-5 {
      font-size: 2.1rem;
      font-weight: 400;
      line-height: 2.85rem;
      color: var(--color-1);
    }
    &-6 {
      font-size: 2.6rem;
      font-weight: 500;
      line-height: 3.4rem;
      color: var(--color-1);
    }
  }

  /* Body || Paragraphs */
  .b,
  .p {
    &-1 {
      font-size: 1.6rem;
      font-weight: 400;
      line-height: 2.6rem;
      color: var(--color-1);
    }
    &-2 {
      font-size: 1.4rem;
      font-weight: 400;
      line-height: 2rem;
      color: var(--color-1);
    }
    &-3 {
      font-size: 1.2rem;
      font-weight: 400;
      line-height: 1.6rem;
      color: var(--color-1);
    }
  }

  /* Link */
  .l {
    text-decoration-line: underline;
    &-1 {
      font-size: 1.6rem;
      font-weight: 500;
      line-height: 2.6rem;
      color: var(--color-1);
    }
    &-2 {
      font-size: 1.4rem;
      font-weight: 500;
      line-height: 2rem;
      color: var(--color-1);
    }
    &-3 {
      font-size: 1.2rem;
      font-weight: 500;
      line-height: 1.6rem;
    }
  }
`;
