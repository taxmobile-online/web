import { css } from "styled-components";

export const Utilities = css`
  /* Margins */
  /* margin top and bottom */
  .my-30 {
    --margin-value: 3rem;
    margin-top: var(--margin-value);
    margin-bottom: var(--margin-value);
  }
  .my-15 {
    --margin-value: 1.5rem;
    margin-top: var(--margin-value);
    margin-bottom: var(--margin-value);
  }
  /* End of margin top and bottom */

  /* margin autos */
  .ml-auto {
    margin-left: auto;
  }
  .mx-auto {
    margin-inline: auto;
  }
  /* End of margin autos */

  /* margin tops */
  .mt-80 {
    margin-top: 8rem;
  }
  .mt-77 {
    margin-top: 7.7rem;
  }
  .mt-70 {
    margin-top: 6rem;
  }
  .mt-60 {
    margin-top: 6rem;
  }
  .mt-50 {
    margin-top: 5rem;
  }
  .mt-40 {
    margin-top: 4rem;
  }
  .mt-30 {
    margin-top: 3rem;
  }
  .mt-25 {
    margin-top: 2.5rem;
  }
  .mt-20 {
    margin-top: 2rem;
  }
  .mt-15 {
    margin-top: 1.5rem;
  }
  .mt-12 {
    margin-top: 1.2rem;
  }
  .mt-10 {
    margin-top: 1rem;
  }
  .mt-5 {
    margin-top: 0.5rem;
  }
  /* End of margin tops */

  /* margin Bottoms */
  .mb-100 {
    margin-bottom: 10rem;
  }
  .mb-80 {
    margin-bottom: 8rem;
  }
  .mb-70 {
    margin-bottom: 7rem;
  }
  .mb-60 {
    margin-bottom: 6rem;
  }
  .mb-40 {
    margin-bottom: 4rem;
  }
  .mb-30 {
    margin-bottom: 3rem;
  }
  .mb-25 {
    margin-bottom: 2.5rem;
  }
  .mb-20 {
    margin-bottom: 2rem;
  }
  .mb-15 {
    margin-bottom: 1.5rem;
  }
  .mb-10 {
    margin-bottom: 1rem;
  }
  .mb-5 {
    margin-bottom: 0.5rem;
  }
  /* End of margin Bottoms */

  /* margin left */
  .ml-20 {
    margin-left: 2rem;
  }
  .ml-10 {
    margin-left: 1rem;
  }
  /* End of margin left */
  /* End of Margins */

  /* Texts */
  .textCenter {
    text-align: center;
  }
  .text-center {
    text-align: center;
  }
  .text-right {
    text-align: right;
  }
  .textUppercase {
    text-transform: uppercase;
  }
  .text-italic {
    font-style: italic;
  }
  .text-truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  /* End of Texts */

  /* Displays */
  .display-inline-block {
    display: inline-block;
  }
  .display-block {
    display: block;
  }
  .display-flex {
    display: flex;
  }
  .shrink-0,
  .shring-0 {
    flex-shrink: 0;
  }
  /* End of Displays */

  /* Colors */
  .fill-color-11 {
    fill: var(--color-11);
  }

  .color-white {
    color: var(--color-white);
  }

  .color-primary {
    color: var(--color-primary);
  }
 
  .color-5 {
    color: var(--color-5);
  }

  .fill-white {
    fill: var(--color-white);
  }
  /* End of colors */
`;
