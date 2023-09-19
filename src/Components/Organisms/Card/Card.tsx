import React from "react";

import Typography from "Components/Atoms/Typography";

import { Top, Wrapper, Bottom } from "./style";

// Type defination
interface Props {
  title?: string;
  subTitle?: string;
  children?: JSX.Element;
}

// Component
const Card: React.FC<Props> = (props) => {
  // Props
  const { title, subTitle, children } = props;

  // Data to display
  return (
    <Wrapper>
      {title || subTitle ? (
        <Top>
          {title && <Typography as="h2" className="h-14" text={title} />}
          {subTitle && <Typography as="p" className="p-8" text={subTitle} />}
        </Top>
      ) : null}

      <Bottom>{children}</Bottom>
    </Wrapper>
  );
};

export default Card;
