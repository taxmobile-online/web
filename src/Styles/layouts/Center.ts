import styled from "styled-components";
import { responsive } from "../Abstract/Breakpoints";

export const Center = styled.section`
  max-width: var(--max-row-width);
  margin-inline: auto;

  /* Media Queries */
  ${responsive("xlg", `padding-left: 2rem; padding-right: 2rem;`)}
`;

export const CenterExtended = styled(Center)`
  max-width: var(--max-row-width-extended);
`;
