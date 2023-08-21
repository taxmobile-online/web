import styled from "styled-components";
import { motion } from "framer-motion";
import { GridCenter } from "Styles/Abstract/Mixins";

export const EmptyStateStyle = styled(motion.div)`
  padding: 8rem 2rem;
  ${GridCenter};
`;
