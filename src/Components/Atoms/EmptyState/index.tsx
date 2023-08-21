import React from "react";
import Typography from "../Typography";
import { EmptyStateStyle } from "./style";

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
