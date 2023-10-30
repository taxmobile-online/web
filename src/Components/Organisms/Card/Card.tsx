import React from "react";

import Typography from "Components/Atoms/Typography";

import { Top, Wrapper, Bottom } from "./style";

// Type defination
interface Props {
  title?: string;
  tittleLight?: boolean;
  subTitle?: string;
  children?: JSX.Element;
  className?: string;
}

// Component
const Card: React.FC<Props> = (props) => {
  // Props
  const { title, subTitle, children, className, tittleLight } = props;

  // Data to display
  return (
    <Wrapper className={className ? className : ""}>
      {title || subTitle ? (
        <Top>
          {title && (
            <Typography
              as="h2"
              className={tittleLight ? "h-23" : "h-14"}
              text={title}
            />
          )}
          {subTitle && <Typography as="p" className="p-8" text={subTitle} />}
        </Top>
      ) : null}

      <Bottom>{children}</Bottom>
    </Wrapper>
  );
};

export default Card;
