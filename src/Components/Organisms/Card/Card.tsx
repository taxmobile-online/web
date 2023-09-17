import React from "react";

import { Top, Wrapper } from "./style";
import Typography from "Components/Atoms/Typography";

// Type defination
interface Props {
  title?: string;
  subTitle?: string;
}

// Component
const Card: React.FC<Props> = (props) => {
  // Props
  const { title, subTitle } = props;

  // Data to display
  return (
    <Wrapper>
      {title || subTitle ? (
        <Top>
          {title && <Typography as="h2" className="h-14" text={title} />}
          {subTitle && <Typography as="p" className="p-8" text={subTitle} />}
        </Top>
      ) : null}
    </Wrapper>
  );
};

export default Card;
