import React from "react";

interface Props {
  as: any;
  className?: string;
  text?: string | number;
  title?: string | number;
  children?: JSX.Element | string | number;
}

const Typography: React.FC<Props> = ({
  as: As,
  className,
  text,
  children,
  ...props
}) => {
  return (
    <As className={className} {...props}>
      {text ? text : children}
    </As>
  );
};

export default Typography;
