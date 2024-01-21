import React from "react";

import { Wrapper } from "./style";

// Type defination
interface Props {
  name?: string;
  size?: "big" | "small";
}

// Component
const UserAvatar: React.FC<Props> = (props) => {
  // Props
  const { size = "small", name = "A" } = props;

  // Data to display
  return <Wrapper className={size}>{name}</Wrapper>;
};

export default UserAvatar;
