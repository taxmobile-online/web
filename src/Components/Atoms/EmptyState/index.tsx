import React from "react";

import { EmptyStateStyle } from "./style";

import Typography from "../Typography";

interface Props {
  title?: string | number;
}
const EmptyState: React.FC<Props> = (props) => {
  const { title } = props;
  return (
    <EmptyStateStyle>
      <Typography as="h4" className="heading-6" text={title || ""} />
    </EmptyStateStyle>
  );
};

export default EmptyState;
