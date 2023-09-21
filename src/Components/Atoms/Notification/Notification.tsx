import React from "react";

import { Wrapper } from "./style";
import Typography from "Components/Atoms/Typography";

// Type defination
interface Props {
  text?: string;
  newLabel?: boolean;
}

// Component
const Notification: React.FC<Props> = ({ text, newLabel = true }) => {
  // Data to display
  return (
    <Wrapper>
      {newLabel && <Typography as="span" className="new" text="NEW" />}
      <Typography as="p" className="p-10" text={text} />
    </Wrapper>
  );
};

export default Notification;
