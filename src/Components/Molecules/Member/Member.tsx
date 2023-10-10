import React from "react";

import { Action, Email, Name, Wrapper } from "./style";

import Typography from "Components/Atoms/Typography";
import { UserAvatar } from "Components/Atoms/UserAvatar";
import Button from "Components/Atoms/Button";
import { Trash } from "Components/Atoms/SvgIcons";

// Type defination
interface Props {}

// Component
const Member: React.FC<Props> = () => {
  // Data to display
  return (
    <Wrapper>
      <Name>
        <UserAvatar />
        <Typography as="h6" className="h-19" text="Brooklyn Simmons" />
      </Name>
      <Email>
        <Typography
          as="h6"
          className="h-20"
          text="michelle.rivera@example.com"
        />
      </Email>
      <Action>
        <Button className="btn-member-trash">
          <Trash />
        </Button>
      </Action>
    </Wrapper>
  );
};

export default Member;
