import React from "react";
import { Wrapper } from "./style";
import Typography from "Components/Atoms/Typography";
import Button from "Components/Atoms/Button";
import { Logout } from "Components/Atoms/SvgIcons";

// Type defination
interface Props {}

// Component
const UserLogout: React.FC<Props> = () => {
  // Data to display
  return (
    <Wrapper>
      <Typography as="h4" className="h-17" text="Logout" />
      <Typography as="p" className="p-13" text="Temporary logout " />

      <Button className="btn-logout-user mt-30">
        <Logout />
        Logout
      </Button>
    </Wrapper>
  );
};

export default UserLogout;
