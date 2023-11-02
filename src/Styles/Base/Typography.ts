import { FlexRowAiCenter } from "Styles/Abstract/Mixins";
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
      line-height: 155%;
      color: var(--color-1);
    }
    &-2 {
      font-size: 3.6rem;
      font-weight: 700;
      line-height: 140%;
      color: var(--color-1);
    }
    &-3 {
      font-size: 2rem;
      font-weight: 500;
      line-height: 2.75rem;
      color: var(--color-3);
    }
    &-4 {
      font-size: 2.2rem;
      font-weight: 500;
      line-height: 150%;
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
    &-7 {
      font-size: 4.8rem;
      font-weight: 700;
      line-height: 123.3%;
      color: var(--color-2);
    }
    &-8 {
      font-size: 1.8rem;
      font-weight: 500;
      line-height: 123.3%;
      color: var(--color-2);
    }
    &-9 {
      font-size: 2.4rem;
      font-weight: 600;
      line-height: 131.523%;
      color: var(--color-2);
    }
    &-10 {
      font-size: 4.8rem;
      font-weight: 600;
      line-height: 131.523%;
      color: var(--color-2);
    }
    &-11 {
      font-size: 1.6rem;
      font-weight: 400;
      line-height: 140%;
      color: var(--color-9);
    }
    &-12 {
      font-size: 2.4rem;
      font-weight: 600;
      line-height: 135%;
      color: var(--color-1);
    }
    &-13 {
      font-size: 1.6rem;
      font-weight: 400;
      line-height: 130%;
      color: var(--color-1);
    }
    &-14 {
      font-size: 2.4rem;
      font-weight: 700;
      line-height: 150%;
      color: var(--color-2);
    }
    &-15 {
      font-size: 1.8rem;
      font-weight: 500;
      line-height: 150%;
      color: var(--color-2);
    }
    &-16 {
      font-size: 1.8rem;
      font-weight: 500;
      line-height: 150%;
      color: var(--color-2);
    }
    &-17 {
      font-size: 2rem;
      font-weight: 500;
      line-height: 140%;
      color: var(--color-2);
    }
    &-18 {
      font-size: 1.8rem;
      font-weight: 500;
      color: var(--color-2);
    }
    &-19 {
      font-size: 1.5rem;
      font-weight: 400;
      line-height: 135%;
      color: var(--color-8);
    }
    &-20 {
      font-size: 1.5rem;
      font-weight: 400;
      line-height: 135%;
      color: var(--color-9);
    }
    &-21 {
      font-size: 1.35rem;
      font-weight: 500;
      line-height: 135%;
      color: var(--color-9);
    }
    &-22 {
      font-size: 1.6rem;
      font-weight: 500;
      line-height: 140%;
      color: var(--color-black);
    }
    &-23 {
      font-size: 2rem;
      font-style: normal;
      font-weight: 500;
      color: var(--color-2);
    }
    &-24 {
      font-size: 2.7rem;
      font-weight: 700;
      line-height: 140%;
      color: var(--color-8);
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
    &-4 {
      font-size: 1.7rem;
      font-weight: 400;
      line-height: 140%;
      color: var(--color-8);
    }
    &-5 {
      font-size: 1.8rem;
      font-weight: 500;
      color: var(--color-9);
    }
    &-6 {
      font-size: 1.5rem;
      font-weight: 500;
      line-height: 150%;
      color: var(--color-8);
    }
    &-7 {
      font-size: 1.4rem;
      font-weight: 400;
      line-height: 140%;
      color: var(--color-white);
    }
    &-8 {
      font-size: 1.5rem;
      font-weight: 400;
      line-height: 145%;
      color: var(--color-4);
    }
    &-9 {
      font-size: 1.4rem;
      font-weight: 500;
      color: var(--color-2);
    }
    &-10 {
      font-size: 1.5rem;
      font-weight: 400;
      line-height: 150%;
      color: var(--color-9);
    }
    &-11 {
      font-size: 1.5rem;
      // font-weight: 400;
      line-height: 150%;
      color: var(--color-4);
    }
    &-12 {
      font-size: 1.5rem;
      font-weight: 400;
      line-height: 135%;
      color: var(--color-4);
    }
    &-13 {
      font-size: 1.4rem;
      font-style: normal;
      font-weight: 400;
      line-height: 135%;
      color: var(--color-9);
    }
    &-14 {
      font-size: 1.6rem;
      font-weight: 400;
      line-height: 135%;
      color: var(--color-3);
    }
    &-15 {
      font-size: 1.3rem;
      font-style: normal;
      font-weight: 400;
      color: var(--color-primary);
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
    &-4 {
      color: var(--color-primary);
      font-size: 1.5rem;
      font-weight: 500;
      text-decoration: none;
      ${FlexRowAiCenter}
      gap: 1rem;
    }
    &-5 {
      ${FlexRowAiCenter}
      gap: 1rem;
      text-decoration: none;

      font-size: 1.6rem;
      font-weight: 400;
      color: var(--color-4);
    }
  }
`;
