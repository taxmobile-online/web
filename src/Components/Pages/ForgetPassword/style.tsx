import { FlexColumnJcCenterAiCenter, GridCenter } from "Styles/Abstract/Mixins";
import styled from "styled-components";

export const Wrapper = styled.main`
  ${GridCenter}
`;

export const Content = styled.main`
  ${FlexColumnJcCenterAiCenter}

  .small-width-box {
    
    flex-basis: 90rem;
    margin-inline: auto;
  }
`;
