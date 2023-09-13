import {
  FlexRowJcBetweenAiCenter,
  FlexRowJcCenter,
} from "Styles/Abstract/Mixins";
import styled from "styled-components";

export const Wrapper = styled.main`
  ${FlexRowJcCenter}
`;

export const Content = styled.main`
  ${FlexRowJcBetweenAiCenter}
  gap: 5rem;
  flex-basis: 110rem;
  height: 100vh;
  /* background-color: red; */
`;

export const Left = styled.div`
  /* height: 100vh; */
  /* background-color: #0000ff7b; */
  flex-basis: 45rem;
`;

export const Right = styled.div`
  /* background-color: #00800081; */
  height: 100vh;
  flex-basis: 50%;
  display: flex;

  /* position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  */

  img {
    height: 100%;
    margin-left: auto;
    /* display: inline-block; */
  }
`;
