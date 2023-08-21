import { styled } from "styled-components";
import { FlexRow, FlexRowJcEnd } from "Styles/Abstract/Mixins";

export const HeroStyle = styled.header`
  ${FlexRow}
  gap: 6.4rem;
`;

export const Left = styled.div`
  flex-grow: 1;
  /* ${FlexRowJcEnd} */
  ${FlexRow}
  padding-left: 8rem;
  padding-top: 5rem;
`;

export const LeftInner = styled.div`
  flex-basis: 58.3rem;
  /* background-color: green; */
`;

export const Right = styled.div`
  /* height: 98.2rem; */
  flex-basis: 77.2rem;

  .hero-image {
    object-fit: covers;
    width: 100%;
    height: 100%;
  }
`;
