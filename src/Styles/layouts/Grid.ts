import { motion } from "framer-motion";
import styled from "styled-components";

interface Props {
  $itemMinWidth?: number;
  $gap?: number;
  $columnGap?: number;
  $rowGap?: number;
}
export const Grid = styled(motion.div)<Props>`
  --item-min-width: ${({ $itemMinWidth }) => `${$itemMinWidth}rem`};
  --gap: ${({ $gap }) => `${$gap}rem`};
  --row-gap: ${({ $rowGap }) => `${$rowGap}rem`};
  --column-gap: ${({ $columnGap }) => `${$columnGap}rem`};

  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(min(100%, var(--item-min-width)), 1fr)
  );
  grid-gap: var(--gap);
  column-gap: var(--column-gap);
  row-gap: var(--row-gap);
`;
