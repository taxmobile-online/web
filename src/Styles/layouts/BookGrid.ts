import styled from "styled-components";
import { motion } from "framer-motion";

export const BookGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(Min(40.4rem, 100%), 1fr));
  grid-gap: 3rem;
`;
